/**
 * @flow
 * @relayHash 51b35b725019ea17c299419d934b14a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLoginInput = {
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type SigninMutationVariables = {|
  input: UserLoginInput
|};
export type SigninMutationResponse = {|
  +UserLoginMutation: ?{|
    +error: ?string,
    +token: ?string,
  |}
|};
export type SigninMutation = {|
  variables: SigninMutationVariables,
  response: SigninMutationResponse,
|};
*/


/*
mutation SigninMutation(
  $input: UserLoginInput!
) {
  UserLoginMutation(input: $input) {
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
    "type": "UserLoginInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "UserLoginMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UserLoginInput!"
      }
    ],
    "concreteType": "UserLoginPayload",
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
  "name": "SigninMutation",
  "id": null,
  "text": "mutation SigninMutation(\n  $input: UserLoginInput!\n) {\n  UserLoginMutation(input: $input) {\n    error\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SigninMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SigninMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '43c300912d2d9c13df15f4dff96f0228';
module.exports = node;
