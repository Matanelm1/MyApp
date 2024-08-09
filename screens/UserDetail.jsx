import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetail = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.image} />
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Phone: {user.phone}</Text>
      <Text style={styles.text}>City: {user.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserDetail;

