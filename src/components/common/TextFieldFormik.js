import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import get from 'lodash/get';
import { connect } from 'formik';

const Input = styled.TextInput`
  border-bottom-color: #383736;
  border-top-color: #383736;
  border-left-color: #383736;
  border-right-color: #383736;
  border-width: 2px;
  margin-bottom: 10px;
  padding: -2px;
  color: #605f5e;
  background-color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  height: 40px;
`;

const Label = styled.Text`
  color: #fff;
`;

const Error = styled.Text`
  color: #f44453;
  margin-top: -9px;
  margin-bottom: 10px;
`;

class TextFieldFormik extends React.Component {
  handleChange = event => {
    const { name, formik } = this.props;
    const { text } = event.nativeEvent;

    formik.setFieldValue(name, text);
  };

  render() {
    const { name, label, formik } = this.props;
    const { values, errors, touched } = formik;
    const value = get(values, name, '');
    const wasTouched = get(touched, name);
    const fieldError = wasTouched && get(errors, name, null);

    return (
      <View>
        <Label>{label}</Label>
        <Input
          value={value}
          onChange={evt => this.handleChange(evt)}
          {...this.props}
        />
        {fieldError && <Error>{fieldError}</Error>}
      </View>
    );
  }
}

export default connect(TextFieldFormik);
