import * as React from 'react';
import { Text } from 'react-native';
import { graphql, createRefetchContainer } from 'react-relay';
import styled from 'styled-components/native';

import createQueryRenderer from '../relay/createQueryRenderer';

import { getToken } from '../security/authentication';

import CommonScene from './CommonScene';

const ProductLabel = styled.Text`
  color: #fff;
`;

class Products extends React.Component {
  async componentDidMount() {
    const token = await getToken();

    if (!token) {
      this.props.navigation.navigate('Signin');
    }
  }

  render() {
    const { navigation } = this.props;
    const { products } = this.props.query;

    return (
      <CommonScene navigation={navigation}>
        {products &&
          products.edges &&
          products.edges.map(({ node }, index) => (
            <ProductLabel key={`product-${index}`}>{node.title}</ProductLabel>
          ))}
      </CommonScene>
    );
  }
}

const ProductsRefetchContainer = createRefetchContainer(
  Products,
  {
    query: graphql`
      fragment Products_query on Query
        @argumentDefinitions(
          first: { type: "Int", defaultValue: 100 }
          category: { type: "ID" }
        ) {
        products(first: $first, category: $category)
          @connection(key: "Products_products", filters: []) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
  },
  graphql`
    query ProductsRefetchQuery($first: Int, $category: ID) {
      ...Products_query
    }
  `
);

export default createQueryRenderer(ProductsRefetchContainer, {
  query: graphql`
    query ProductsQuery($first: Int, $category: ID) {
      ...Products_query @arguments(category: $category)
    }
  `,
  queriesParams: ({ navigation }) => ({
    category: navigation.state.params.categoryId,
  }),
});
