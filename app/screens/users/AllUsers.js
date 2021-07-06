import axios from 'axios';
import React, {useState} from 'react';
import {useEffect} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../../components/cards/UserCard';
import color from '../../config/color';

const {width, height} = Dimensions.get('screen');

export default function AllUsers({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  //   routes

  const getAllUsers = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <View style={{backgroundColor: color.transparentblack}}>
      {/* <Text>{JSON.stringify(users)}</Text> */}
      <FlatList
        data={users}
        keyExtractor={(user) => user.username}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                navigation.navigate('Posts', {
                  name: item.name,
                  userId: item.id,
                  username: item.username,
                  email: item.email,
                  number: item.phone,
                  website: item.website,
                })
              }>
              <UserCard
                title={item.name}
                subtitle={item.username}
                mail={item.email}
                company={item.company.name}
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
    width,
    marginBottom: 2,
  },
});
