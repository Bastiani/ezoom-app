import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonStyled = styled.TouchableOpacity`
  flex: 1;
  background-color: #fdfffc;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-top-color: black;
  border-top-width: 1px;
`;

class ListItem extends React.PureComponent {
  _onPress = () => {
    const { id, onPressItem } = this.props;
    onPressItem(id);
  };

  render() {
    const { title } = this.props;
    return (
      <ButtonStyled onPress={this._onPress}>
        <Text>{title}</Text>
      </ButtonStyled>
    );
  }
}

export default ListItem;
