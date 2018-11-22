import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import styled from 'styled-components/native';

import createQueryRenderer from '../../relay/createQueryRenderer';

const Panel = styled.View`
  background-color: #3e4550;
`;

const PanelText = styled.Text`
  color: #fff;
`;

const ButtonStyled = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    (props.signin && '#617B66') ||
    (props.signup && '#3C3572') ||
    'transparent'};
  height: 28px;
`;

const CategoryItem = (id, title, navigation, index) => (
  <Panel key={`category-${index}`}>
    <ButtonStyled
      onPress={() => navigation.navigate('Products', { categoryId: id })}
    >
      <PanelText>{title}</PanelText>
    </ButtonStyled>
  </Panel>
);

class CategoriesMenu extends React.Component {
  render() {
    const { categories } = this.props.query;
    const { navigation } = this.props;

    return categories.edges.map(({ node: { id, title } }, index) =>
      CategoryItem(id, title, navigation, index)
    );
  }
}

const CategoriesMenuRefetchContainer = createRefetchContainer(
  CategoriesMenu,
  {
    query: graphql`
      fragment CategoriesMenu_query on Query
        @argumentDefinitions(first: { type: "Int", defaultValue: 100 }) {
        categories(first: $first)
          @connection(key: "CategoriesMenu_categories", filters: []) {
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
    query CategoriesMenuRefetchQuery($first: Int) {
      ...CategoriesMenu_query
    }
  `
);

export default createQueryRenderer(CategoriesMenuRefetchContainer, {
  query: graphql`
    query CategoriesMenuQuery($first: Int) {
      ...CategoriesMenu_query
    }
  `,
  variables: {
    first: 10,
  },
});
