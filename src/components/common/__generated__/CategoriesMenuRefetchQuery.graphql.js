/**
 * @flow
 * @relayHash 9a05b85bac7604faa96735d8c3c1f9c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoriesMenu_query$ref = any;
export type CategoriesMenuRefetchQueryVariables = {|
  first?: ?number
|};
export type CategoriesMenuRefetchQueryResponse = {|
  +$fragmentRefs: CategoriesMenu_query$ref
|};
export type CategoriesMenuRefetchQuery = {|
  variables: CategoriesMenuRefetchQueryVariables,
  response: CategoriesMenuRefetchQueryResponse,
|};
*/


/*
query CategoriesMenuRefetchQuery {
  ...CategoriesMenu_query
}

fragment CategoriesMenu_query on Query {
  categories(first: 100) {
    edges {
      node {
        id
        title
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CategoriesMenuRefetchQuery",
  "id": null,
  "text": "query CategoriesMenuRefetchQuery {\n  ...CategoriesMenu_query\n}\n\nfragment CategoriesMenu_query on Query {\n  categories(first: 100) {\n    edges {\n      node {\n        id\n        title\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CategoriesMenuRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "CategoriesMenu_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategoriesMenuRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categories",
        "storageKey": "categories(first:100)",
        "args": v1,
        "concreteType": "CategoryConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CategoryConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Category",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "categories",
        "args": v1,
        "handle": "connection",
        "key": "CategoriesMenu_categories",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a05ec372b30f97ac0b6507aebc8265d4';
module.exports = node;
