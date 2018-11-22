import * as React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CategoriesMenu from './CategoriesMenu';

const Content = styled.View`
  flex: 1;
  background-color: #3b414a;
`;

const Accordion = styled.TouchableOpacity`
  height: 46px;
  background: #1e2127;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;

const AccordionText = styled.Text`
  color: #fff;
`;

const Panel = styled.View`
  background-color: #3e4550;
`;

const PanelText = styled.Text`
  color: #fff;
`;

const Icon = styled(FontAwesome5)`
  color: #fff;
  font-size: 20px;
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

const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
`;

class DrawerMenu extends React.Component {
  state = {
    display: {},
  };

  handleMenuClick = label => {
    const {
      state: { display },
    } = this;

    const isOpen = !!display[label];

    this.setState({
      display: {
        [label]: !isOpen,
      },
    });
  };

  render() {
    const { display } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaViewStyled>
        <Content>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Panel>
              <ButtonStyled
                signup
                onPress={() => navigation.navigate('Signup')}
              >
                <PanelText>Cadastrar</PanelText>
              </ButtonStyled>
            </Panel>
            <Panel>
              <ButtonStyled
                signin
                onPress={() => navigation.navigate('Signin')}
              >
                <PanelText>Login</PanelText>
              </ButtonStyled>
            </Panel>
            <Accordion onPress={() => this.handleMenuClick('panel1')}>
              <AccordionText>Categorias</AccordionText>
              <Icon
                name={display['panel1'] ? 'angle-down' : 'angle-up'}
                solid
              />
            </Accordion>
            {display['panel1'] && <CategoriesMenu navigation={navigation} />}
            {/* <Accordion onPress={() => this.handleMenuClick('panel2')}>
              <AccordionText>Tênis</AccordionText>
              <Icon
                name={display['panel2'] ? 'angle-down' : 'angle-up'}
                solid
              />
            </Accordion>
            {display['panel2'] && (
              <Panel>
                <PanelText>Content 2</PanelText>
              </Panel>
            )} */}
          </ScrollView>
        </Content>
      </SafeAreaViewStyled>
    );
  }
}

export default DrawerMenu;
