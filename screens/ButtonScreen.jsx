import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const ButtonScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <CustomButton title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <CustomButton title="Go to Shopping List" onPress={() => navigation.navigate('ShoppingList')} />
      <CustomButton title="Go to Add Item" onPress={() => navigation.navigate('AddItem')} />
      <CustomButton title="Go to User Profile" onPress={() => navigation.navigate('UserProfile')} />
      <CustomButton title="Go to Form Screen" onPress={() => navigation.navigate('Forms')} />
      <CustomButton title="Go to List Screen" onPress={() => navigation.navigate('Lists')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ButtonScreen;


