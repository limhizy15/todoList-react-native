import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const TodoAppender = ({addItem}) => {
  const [inputText, setInputText] = useState('');

  const onChangeText = (text: string): void => {
    setInputText(text);
  };

  const onPressBtn = (): void => {
    setInputText(addItem(inputText));
  };

  return (
    <ComponentContainer>
      <View>
        <Input
          placeholder="Add Task..."
          onChangeText={onChangeText}
          value={inputText}
        />
      </View>
      <SubmitButton onPress={onPressBtn}>
        <Text>추가</Text>
      </SubmitButton>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Input = styled.TextInput`
  width: 290px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;

  font-size: 20px;
  background-color: white;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #eceff4;
  width: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export default TodoAppender;
