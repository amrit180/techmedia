import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';

import React, {useState, useEffect} from 'react';

import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CommentCard from '../../components/cards/CommentCard';
import PostCard from '../../components/cards/PostCard';

import Separator from '../../components/Separator';
import color from '../../config/color';

const {width} = Dimensions.get('screen');

export default function SinglePost({route}) {
  const {name, username, title, body, userId, postId} = route.params;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);
  const getAllComments = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) =>
        setComments(res.data.filter((comment) => comment.postId == postId)),
      )
      .catch((err) => console.log(err));
  };
  return (
    <>
      <PostCard body={body} title={title} user={username} />

      <Separator />
      <Text
        style={{
          width,
          marginTop: 10,
          backgroundColor: color.white,
          paddingHorizontal: 30,
          paddingVertical: 10,
          fontSize: 18,
          color: color.primary,
          borderBottomColor: color.primary,
          fontWeight: 'bold',
          borderBottomWidth: 1,
          marginBottom: 10,
        }}>
        Comments:
      </Text>
      <ScrollView>
        <View>
          {comments &&
            comments.map((item, i) => {
              return (
                <View key={i}>
                  <CommentCard text={item.body} title={item.name} />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </>
  );
}
