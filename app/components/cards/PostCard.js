import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import color from '../../config/color';

const {width, height} = Dimensions.get('screen');

export default function PostCard({body, user, title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.bodyText}>{body}</Text>
      {user && (
        <Text style={[styles.bodyText, {color: color.primary}]}>
          By : {user}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: color.black,
    fontSize: 18,
    fontWeight: '700',
  },
  bodyText: {
    color: color.lightBlack,
    fontSize: 16,
  },
});
