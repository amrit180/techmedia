import React from 'react';
import {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const {height, width} = Dimensions.get('window');
export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/newlogo.png')}
        style={{height: 100, width: 200}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
