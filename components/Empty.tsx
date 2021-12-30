import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Empty() {
  return (
    <View style={styles.block}>
      <Image source={require('./../assets/happy.png')} style={styles.image} />
      <Text style={styles.description}>아직 할 일이 없네요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 200,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
