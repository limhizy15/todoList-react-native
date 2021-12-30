import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

type Props = {
  addItem: (task: string, currentTime: string) => void;
};

export default function TodoAppender({addItem}: Props) {
  const [inputText, setInputText] = useState('');
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

  const onChangeText = (text: string): void => {
    setInputText(text);
  };

  const onPressBtn = (): void => {
    addItem(inputText, currentTime);
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
}

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
