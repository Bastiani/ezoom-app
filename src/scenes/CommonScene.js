import * as React from 'react';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView, SafeAreaView } from 'react-native';

import { removeToken } from '../security/authentication';

// import LogoFile from '../assets/images/logo.png';

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const Content = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

const Header = styled.View`
  display: flex;
  height: 45px;
  background-color: #22262d;
  justify-content: center;
  flex-direction: row;
`;

const LogoView = styled.TouchableOpacity`
  flex: 1;
  align-self: center;
  padding: 5px;
`;

// const Logo = styled.Image`
//   flex: 1;
//   width: undefined;
// `;

const ButtonStyled = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 30px;
`;

const Icon = styled(FontAwesome5)`
  color: #fff;
  font-size: 20px;
`;

const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
`;

const CommonScene = ({ children, navigation }) => (
  <SafeAreaViewStyled>
    <Container>
      <Header>
        <ButtonStyled onPress={() => navigation.openDrawer()}>
          <Icon name="bars" solid />
        </ButtonStyled>
        <LogoView onPress={() => navigation.navigate('Home')}>
          {/* <Logo source={LogoFile} resizeMode="contain" /> */}
        </LogoView>
        <ButtonStyled onPress={async () => removeToken()}>
          <Icon name="user" solid />
        </ButtonStyled>
      </Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Content padder>{children}</Content>
      </ScrollView>
    </Container>
  </SafeAreaViewStyled>
);

export default CommonScene;
