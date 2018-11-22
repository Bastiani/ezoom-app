import React from 'react';
import { ScrollView, Alert } from 'react-native';
import styled from 'styled-components/native';
import { withFormik } from 'formik';
import * as yup from 'yup';

import TextField from '../components/common/TextFieldFormik';
import DatePicker from '../components/common/DatePickerFormik';

import { setToken } from '../security/authentication';

import CommonScene from './CommonScene';
import SignupMutation from './SignupMutation';


const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
  background-color: #22262d;
`;

const Text = styled.Text`
  color: ${props => (props.textBlue ? `#3272dc` : `#fff`)};
`;

const SigninButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: solid 1px #fff;
  height: 35px;
`;

const SignupButton = styled.TouchableOpacity`
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
        <TextField label="Nome" name="name" />
        <DatePicker label="Aniversário" name="birthday" />
        <TextField label="Senha" name="password" secureTextEntry />
        <TextField
          label="Confirmar Senha"
          name="passwordRepeat"
          secureTextEntry
        />
        <SignupButton onPress={handleSubmit}>
          <Text>Cadastrar</Text>
        </SignupButton>
        <Text>Já possui cadastro?</Text>
        <SigninButton onPress={() => navigation.navigate('Signin')}>
          <Text textBlue>Faça seu login!</Text>
        </SigninButton>
      </Container>
    </ScrollView>
  </CommonScene>
);

const Signup = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    birthday: '',
    name: '',
    passwordRepeat: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email é obrigatório'),
    password: yup.string().required('É necessário preencher a senha'),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password')], 'Confirmação de senha é inválida.')
      .required('Confirmação de senha é inválida.'),
  }),
  handleSubmit: (values, { props: { navigation }, setSubmitting }) => {
    const { passwordRepeat, birthday, ...input } = values;

    const onCompleted = ({ UserAdd }) => {
      setSubmitting(false);
      const token = UserAdd && UserAdd.token;

      if (!UserAdd || UserAdd.error) {
        Alert.alert('Erro', 'Erro ao tentar cadastrar');
      } else if (token) {
        setToken(token);
        navigation.navigate('Home');
      }
    };

    const onError = () => {
      setSubmitting(false);
      Alert.alert('Erro', 'Erro ao tentar cadastrar');
    };

    SignupMutation.commit(input, onCompleted, onError);
  },
})(Form);

export default Signup;
