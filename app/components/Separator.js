import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default function Separator() {
  return (
    <>
      <View style={styles.gap} />
    </>
  );
}

const styles = StyleSheet.create({
  gap: {
    height: 2,
    width,
  },
});
