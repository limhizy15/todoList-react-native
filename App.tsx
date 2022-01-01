import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import TodoAppender from './components/TodoAppender';
import TodoListItem from './components/TodoListItem';
import Header from './components/Header';
import Empty from './components/Empty';

import {useStore} from './todoStore';

export default function App() {
  const {addItem, deleteItem, toggleCompletedState, editItem, todos} =
    useStore();

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={todos}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          renderItem={({item}) => (
            <TodoListItem
              item={item}
              toggleComplete={toggleCompletedState}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          )}
          keyExtractor={item => item.key}
        />
        <View>
          <TodoAppender addItem={addItem} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
