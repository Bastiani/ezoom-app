/* https://facebook.github.io/relay/docs/en/relay-environment.html
   https://facebook.github.io/relay/docs/en/network-layer.html
*/

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { installRelayDevTools } from 'relay-devtools';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { getToken } from './security/authentication';

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;
  const subscriptionClient = new SubscriptionClient(
    'ws://localhost:5000/subscriptions',
    {
      reconnect: true,
    }
  );

  const onNext = result => {
    observer.onNext(result);
  };
  const onError = error => {
    observer.onError(error);
  };
  const onComplete = () => {
    observer.onCompleted();
  };

  const client = subscriptionClient
    .request({ query, variables })
    .subscribe(onNext, onError, onComplete);

  // Return a dispose method to be able to unsubscribe and trigger closing the
  // socket connection
  return {
    dispose: () => {
      // unsubscribe and close this socket connection
      client.unsubscribe();
      subscriptionClient.close();
    },
  };
};

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
async function fetchQuery(operation, variables) {
  // eslint-disable-next-line
  const token = await getToken();
  return fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      Authorization: token,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => response.json());
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery, setupSubscription);
const handlerProvider = null;

const environment = new Environment({
  handlerProvider, // Can omit.
  network,
  store,
});

installRelayDevTools();

export default environment;
