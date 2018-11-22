/**
 * @flow
 * @relayHash a65ab490c637d9dc294e409940e46750
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserAddInput = {
  name: string,
  password?: ?string,
  email: string,
  active?: ?boolean,
  clientMutationId?: ?string,
};
export type SignupMutationVariables = {|
  input: UserAddInput
|};
export type SignupMutationResponse = {|
  +UserAddMutation: ?{|
    +error: ?string,
    +token: ?string,
  |}
|};
export type SignupMutation = {|
  variables: SignupMutationVariables,
  response: SignupMutationResponse,
|};
*/


/*
mutation SignupMutation(
  $input: UserAddInput!
) {
  UserAddMutation(input: $input) {
    error
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UserAddInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserAddMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserAddInput!"
      }
    ],
    "concreteType": "UserAddPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "SignupMutation",
  "id": null,
  "text": "mutation SignupMutation(\n  $input: UserAddInput!\n) {\n  UserAddMutation(input: $input) {\n    error\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SignupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SignupMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '47e65799289acb1d9ab84b37aa096842';
module.exports = node;
