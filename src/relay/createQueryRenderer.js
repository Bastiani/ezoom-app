// @flow
import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import styled from 'styled-components';
import { Text } from 'react-native';

import type { GraphQLTaggedNode, Variables } from 'react-relay';

import environment from '../Environment';

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
  loadingView?: ?React.Node,
};

const ContainerStyled = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function createQueryRenderer(
  FragmentComponent: React.ComponentType<*>,
  config: Config
): React.ComponentType<*> {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component<{}> {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props)
        : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            if (props) {
              return <FragmentComponent {...this.props} query={props} />;
            }

            if (error) {
              return <Text>{error}</Text>;
            }

            if (config.loadingView) {
              return config.loadingView;
            }

            return (
              <ContainerStyled>
                <Text>Loading...</Text>
              </ContainerStyled>
            );
          }}
        />
      );
    }
  }

  return QueryRendererWrapper;
}
