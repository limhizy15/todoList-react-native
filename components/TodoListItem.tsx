import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

interface IToDo {
  key: string;
  task: string;
  createdTime: string;
  isCompleted: boolean;
}

type Props = {
  item: IToDo;
  toggleComplete: (key: string) => void;
  deleteItem: (task: string) => void;
};

export default function TodoListItem({
  item,
  toggleComplete,
  deleteItem,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View>
          <TouchableOpacity style={styles.circleContainer}>
            <Icon
              name={item.isCompleted ? 'chevron-with-circle-down' : 'circle'}
              size={30}
              onPress={() => toggleComplete(item.key)}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.task, item.isCompleted && styles.lineThrough]}>
            {item.task}
          </Text>
          <Text style={styles.date}>{item.createdTime}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="edit" size={20} onPress={() => deleteItem(item.key)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="trash" size={20} onPress={() => deleteItem(item.key)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 290,
    padding: 10,
    marginBottom: 30,
    marginRight: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  task: {
    color: 'black',
    width: 170,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  date: {
    color: 'midnightblue',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    width: 100,
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  iconContainer: {
    marginTop: 10,
    marginRight: 10,
  },
});
