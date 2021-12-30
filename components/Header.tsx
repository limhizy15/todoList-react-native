import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
  },
});
