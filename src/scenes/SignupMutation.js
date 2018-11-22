import { commitMutation, graphql } from 'react-relay';

import Environment from '../Environment';

const mutation = graphql`
  mutation SignupMutation($input: UserAddInput!) {
    UserAddMutation(input: $input) {
      error
      token
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(Environment, {
    mutation,
    variables: {
      input,
    },
    onCompleted,
    onError,
  });
}

export default { commit };
