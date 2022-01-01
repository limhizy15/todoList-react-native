import create from 'zustand';
import {Todo} from './model/Todo';
import {Alert} from 'react-native';

interface TodoState {
  todos: Todo[];
  addItem: (task: string, currentTime: string) => void;
  deleteItem: (key: string) => void;
  toggleCompletedState: (key: string) => void;
  editItem: (key: string, inputText: string) => void;
}

export const useStore = create<TodoState>(set => ({
  todos: [],
  addItem: (task: string, currentTime: string) => {
    if (task === '' || typeof task === undefined) {
      Alert.alert('할 일을 입력해주세요.');
      return;
    }
    set(state => ({
      todos: [
        {
          key: Math.random().toString(),
          task,
          createdTime: currentTime,
          isCompleted: false,
        } as Todo,
        ...state.todos,
      ],
    }));
  },
  deleteItem: (key: string) => {
    set(state => ({
      todos: state.todos.filter(todo => todo.key !== key),
    }));
  },
  toggleCompletedState: (key: string) => {
    set(state => ({
      todos: state.todos.map(todo =>
        todo.key === key
          ? ({...todo, isCompleted: !todo.isCompleted} as Todo)
          : todo,
      ),
    }));
  },
  editItem: (key: string, inputText: string) => {
    set(state => ({
      todos: state.todos.map(todo =>
        todo.key === key ? ({...todo, task: inputText} as Todo) : todo,
      ),
    }));
  },
}));
