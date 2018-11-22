import React from 'react';
import { ScrollView, Alert } from 'react-native';
import styled from 'styled-components/native';
import { withFormik } from 'formik';
import * as yup from 'yup';

import TextField from '../components/common/TextFieldFormik';

import { setToken } from '../security/authentication';

import CommonScene from './CommonScene';
import SigninMutation from './SigninMutation';

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
  background-color: #22262d;
`;

const Text = styled.Text`
  color: ${props => (props.textBlue ? `#3272dc` : `#fff`)};
`;

const SignupButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: solid 1px #fff;
  height: 35px;
`;

const SigninButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #87cf00;
  height: 35px;
`;

const Form = ({ handleSubmit, navigation }) => (
  <CommonScene navigation={navigation}>
    <ScrollView>
      <Container>
        <TextField label="Email" name="email" />
        <TextField label="Senha" name="password" secureTextEntry />
        <SigninButton onPress={handleSubmit}>
          <Text>Entrar</Text>
        </SigninButton>
        <Text>Não possui cadastro?</Text>
        <SignupButton onPress={() => navigation.navigate('Signup')}>
          <Text textBlue>Cadastre-se!</Text>
        </SignupButton>
      </Container>
    </ScrollView>
  </CommonScene>
);

const Signin = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email é obrigatório'),
    password: yup.string().required('É necessário preencher a senha'),
  }),
  handleSubmit: (values, { props: { navigation }, setSubmitting }) => {
    const onCompleted = res => {
      setSubmitting(false);
      const response = res && res.UserLoginMutation;

      if (response && response.error) {
        Alert.alert('Erro', 'Erro ao tentar fazer login');
      } else if (response.token) {
        console.log('====== token', response.token);

        setToken(response.token);
        navigation.goBack();
      }
    };

    const onError = () => {
      setSubmitting(false);
      Alert.alert('Erro', 'Erro ao tentar fazer login');
    };

    SigninMutation.commit(values, onCompleted, onError);
  },
})(Form);

export default Signin;
