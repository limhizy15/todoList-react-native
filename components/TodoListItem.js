import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo';

export default function TodoListItem({item, deleteItem}) {
  return (
    <ComponentContainer>
      <ListContainer>
        <View>
          <CircleContainer>
            <Icon name="circle" size={30} />
          </CircleContainer>
        </View>
        <View>
          <TaskText>{item.task}</TaskText>
          <DateText>{item.createdTime}</DateText>
        </View>
        <BtnContainer onPress={() => deleteItem(item.key)}>
          <Text>수정</Text>
        </BtnContainer>
        <BtnContainer onPress={() => deleteItem(item.key)}>
          <Text>삭제</Text>
        </BtnContainer>
      </ListContainer>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  justify-content: center;
`;

const ListContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: whitesmoke;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const CircleContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const TaskText = styled.Text`
  color: black;
  width: 210px;
  font-size: 20px;
  font-weight: 500;
  margin: 0px 20px;
  margin-top: 10px;
`;

const DateText = styled.Text`
  color: #5e81ac;
  font-size: 15px;
  margin: 10px 20px;
  width: 100px;
`;

const BtnContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 15px;
  height: 40px;
`;
