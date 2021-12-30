import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import styled from 'styled-components';
import TodoAppender from './components/TodoAppender';
import TodoListItem from './components/TodoListItem';
import Header from './components/Header';

type Props = {};

interface IToDo {
  key: string;
  task: string;
  createdTime: string;
  isCompleted: boolean;
}

export default function App() {
  const [data, setData] = useState<IToDo[]>([]);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    setCurrentTime(
      year + '.' + month + '.' + date + ' ' + hours + ':' + min + ':' + sec,
    );
  });

  const addItem = (task: string): void => {
    console.log(typeof task);

    if (task === '' || typeof task === undefined) {
      // Alert.alert('Alert Title', 'My Alert Msg', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.log('Cancel Pressed'),
      //     style: 'cancel',
      //   },
      //   {text: 'OK', onPress: () => console.log('OK Pressed')},
      // ]);
      alert('할 일을 적어주세요.');
      return;
    }

    setData(prevItem => {
      return [
        {
          key: Math.random().toString(),
          task,
          createdTime: currentTime,
          isCompleted: false,
        },
        ...prevItem,
      ];
    });
  };

  const deleteItem = (key: string): void => {
    setData(prevItem => {
      return prevItem.filter(todo => todo.key != key);
    });
  };

  const toggleComplete = (key: string): void => {
    const newDatas = data.map(item => {
      if (item.key === key) {
        return {...item, isCompleted: !item.isCompleted};
      }
      return item;
    });
    setData(newDatas);
  };

  return (
    <ComponentContainer>
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          renderItem={({item}) => (
            <TodoListItem
              item={item}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          )}
          keyExtractor={item => item.key}
        />
        <View>
          <TodoAppender addItem={addItem} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.SafeAreaView`
  background-color: #5e81ac;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
