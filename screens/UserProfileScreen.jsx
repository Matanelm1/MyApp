import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import UserProfile from '../components/UserProfile';

const users = [
  { id: '1', name: 'Matanel', phone: '123-456-7890', city: 'Tel Aviv', image: require('../assets/images/user1.jpg') },
  { id: '2', name: 'Moshe', phone: '987-654-3210', city: 'Jerusalem', image: require('../assets/images/user2.jpg') },
  { id: '3', name: 'Dolev', phone: '555-555-5555', city: 'Haifa', image: require('../assets/images/user3.jpg') },
  { id: '4', name: 'Yasen', phone: '444-444-4444', city: 'Eilat', image: require('../assets/images/user4.jpg') },
  { id: '5', name: 'Gal', phone: '333-333-3333', city: 'Netanya', image: require('../assets/images/user5.jpg') },
  { id: '6', name: 'Sharon', phone: '222-222-2222', city: 'Rishon Lezion', image: require('../assets/images/user6.jpg') },
  { id: '7', name: 'Liraz', phone: '111-111-1111', city: 'Bat Yam', image: require('../assets/images/user7.jpg') },
  { id: '8', name: 'Yoni', phone: '999-999-9999', city: 'Holon', image: require('../assets/images/user8.jpg') },
];

const UserProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { user: item })}>
            <UserProfile user={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default UserProfileScreen;









