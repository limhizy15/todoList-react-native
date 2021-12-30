import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import TodoAppender from './components/TodoAppender';
import TodoListItem from './components/TodoListItem';
import Header from './components/Header';

export default function App() {
  const [data, setData] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

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

  const addItem = task => {
    if (task === '') {
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

  const editItem = (key, task) => {
    setData(prevItem => {
      return [
        ...prevItem,
        {
          key,
          task,
        },
      ];
    });
  };

  const deleteItem = key => {
    setData(prevItem => {
      return prevItem.filter(todo => todo.key != key);
    });
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
              editItem={editItem}
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
