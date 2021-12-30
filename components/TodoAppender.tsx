import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

type Props = {
  addItem: (task: string) => void;
};

const TodoAppender = ({addItem}: Props) => {
  const [inputText, setInputText] = useState('');

  const onChangeText = (text: string): void => {
    setInputText(text);
  };

  const onPressBtn = (): void => {
    addItem(inputText);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add Task..."
          onChangeText={onChangeText}
          value={inputText}
        />
      </View>
      <Button title="추가" onPress={onPressBtn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
});

export default TodoAppender;
