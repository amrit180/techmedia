import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import color from '../../config/color';
const {width, height} = Dimensions.get('screen');

export default function UserCard({
  title,
  subtitle,
  mail,
  company,
  number,
  website,
}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Name : {title}</Text>
      {subtitle && <Text style={styles.subtext}>Username : {subtitle}</Text>}
      {mail && <Text style={styles.subtext}>Email : {mail}</Text>}
      {company && <Text style={styles.subtext}>Work at : {company}</Text>}
      {number && <Text style={styles.subtext}>Phone : {number}</Text>}
      {website && <Text style={styles.subtext}>Website : {website}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: color.lightBlack,
    fontSize: 16,
    fontWeight: '700',
  },
  subtext: {
    color: color.lightBlack,
    fontSize: 16,
    fontWeight: '500',
  },
  textContainer: {
    // height: 70,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width,
    justifyContent: 'center',
    backgroundColor: color.white,
  },
});
