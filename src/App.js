// @flow
import * as React from 'react';
import styled from 'styled-components/native';

import { createRootNavigator } from './routes';

const RootNavigator = createRootNavigator();

const RootView = styled.View`
  flex: 1;
  background-color: #2f3640;
`;

export default () => (
  <RootView>
    <RootNavigator />
  </RootView>
);
