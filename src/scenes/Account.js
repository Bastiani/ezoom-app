import * as React from 'react';
import { View, Text } from 'react-native';

import CommonScene from './CommonScene';

class Account extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <CommonScene navigation={navigation}>
        <View>
          <Text>Teste</Text>
        </View>
      </CommonScene>
    );
  }
}

export default Account;
