import * as React from 'react';
import { Text } from 'react-native';

import CommonScene from './CommonScene';

class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <CommonScene navigation={navigation}>
        <Text>Home</Text>
      </CommonScene>
    );
  }
}

export default Home;
