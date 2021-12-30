import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

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
      <TouchableOpacity>
        <Icon name="circle-with-plus" size={35} onPress={onPressBtn} />
      </TouchableOpacity>
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
    width: 290,
    padding: 10,
    marginBottom: 40,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
