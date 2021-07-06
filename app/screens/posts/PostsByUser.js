import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PostCard from '../../components/cards/PostCard';
import UserCard from '../../components/cards/UserCard';

import color from '../../config/color';

const {width} = Dimensions.get('screen');

export default function PostsByUser({navigation, route}) {
  const {name, username, email, number, website, userId} = route.params;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) =>
        setPosts(res.data.filter((post) => post.userId === userId)),
      )
      .catch((err) => console.log(err));
  };
  return (
    <View style={{backgroundColor: color.white}}>
      {/* <Text>userPOst{userId}</Text>
      <Text>userPOst{username}</Text>
      <Text>{JSON.stringify(posts.length)}</Text> */}
      <View
        style={
          {
            // marginBottom: 2,
            // borderBottomColor: color.primary,
            // borderBottomWidth: 1,
          }
        }>
        <Text
          style={{
            fontSize: 18,
            color: color.primary,
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}>
          User Info
        </Text>
        <UserCard
          title={name}
          subtitle={username}
          mail={email}
          website={website}
          number={number}
        />
        <Text style={{paddingHorizontal: 20}}>Total Posts :{posts.length}</Text>
      </View>
      <Text
        style={{
          width,
          marginTop: 10,
          backgroundColor: color.white,
          paddingHorizontal: 20,

          fontSize: 18,
          color: color.primary,
          borderBottomColor: color.primary,
          fontWeight: 'bold',
          borderBottomWidth: 1,
          marginBottom: 10,
        }}>
        Posts:
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SinglePost', {
                  name,
                  username,
                  body: item.body,
                  userId,
                  postId: item.id,
                  title: item.title,
                })
              }
              style={styles.list}>
              <PostCard
                body={`${item.body.substring(0, 60)}...`}
                title={item.title}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: width,
    marginBottom: 5,
  },
});
