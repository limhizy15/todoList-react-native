import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <ComponentContainer>
      <HeaderText>TODO List</HeaderText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  height: 150px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;
