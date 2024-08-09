import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'matanel' && password === '1234') {
      navigation.navigate('HomeTabs'); // ניווט ל-HomeTabs לאחר התחברות מוצלחת
    } else {
      Alert.alert('Invalid Credentials', 'The username or password you entered is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/login.jpg')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} color="#28a745" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default LoginScreen;




