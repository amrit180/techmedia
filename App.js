import React from 'react';
import {View, Text} from 'react-native';
// navigator
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import AllUsers from './app/screens/users/AllUsers';
import {NavigationContainer} from '@react-navigation/native';
import PostsByUser from './app/screens/posts/PostsByUser';
import SinglePost from './app/screens/posts/SinglePost';
import SplashScreen from './app/screens/SplashScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <Stack.Screen name="Home" component={AllUsers} />
      <Stack.Screen
        name="Posts"
        options={{title: 'Posts'}}
        component={PostsByUser}
      />
      <Stack.Screen name="SinglePost" component={SinglePost} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
