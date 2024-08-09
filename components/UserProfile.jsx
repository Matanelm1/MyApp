import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={user.image} style={styles.profileImage} />
      <Text style={styles.profileName}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
  },
});

export default UserProfile;






