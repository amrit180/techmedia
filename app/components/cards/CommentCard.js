import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import color from '../../config/color';
import Separator from '../Separator';
import UserCard from './UserCard';
const {width, height} = Dimensions.get('screen');
export default function CommentCard({text, title, subtitle}) {
  return (
    <>
      {/* <UserCard title={title} subtitle={subtitle} />
      <Separator /> */}
      <View style={styles.container}>
        <Text style={styles.subtext}>{text}</Text>
        <Text style={{color: color.black}}>
          By :<Text style={{color: color.lightgrey}}> {title}</Text>
        </Text>
      </View>
      <Separator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: color.white,
  },
  subtext: {
    color: color.lightBlack,
    fontSize: 16,
    fontWeight: '500',
  },
});
