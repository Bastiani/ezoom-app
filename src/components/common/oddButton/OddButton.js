import * as React from 'react';
import styled from 'styled-components/native';

const OddButtonStyled = styled.TouchableOpacity`
  flex: 1;
  ${props =>
    props.isActive ? 'background-color: #ee3037' : 'background-color: #393f48'};
  background-color: #393f48;
  max-width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TableRowText = styled.Text`
  color: #f2f2f2;
`;

const OddButton = ({ oddId, oddPrice, text, isActive, ...props }) => (
  <OddButtonStyled isActive={isActive} {...props}>
    <TableRowText>{oddPrice.toFixed(2)}</TableRowText>
    <TableRowText>{text}</TableRowText>
  </OddButtonStyled>
);

export default OddButton;
