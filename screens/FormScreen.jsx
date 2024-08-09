import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import CustomForm from '../components/CustomForm';
import CustomButton from '../components/CustomButton';

const FormScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (username === 'matanel' && password === '1234') {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Invalid Credentials', 'The username or password you entered is incorrect.');
    }
  };

  const handleSubmit = (formType) => {
    Alert.alert(`${formType} Submitted`, `You have successfully submitted the ${formType}.`);
  };

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <CustomForm
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <CustomForm
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>User Details Form</Text>
        <CustomForm placeholder="Name" />
        <CustomForm placeholder="Email" />
        <CustomForm placeholder="Phone" />
        <CustomForm placeholder="Address" />
        <CustomButton title="Submit User Details" onPress={() => handleSubmit('User Details Form')} />
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Feedback Form</Text>
        <CustomForm placeholder="Your Feedback" />
        <CustomButton title="Submit Feedback" onPress={() => handleSubmit('Feedback Form')} color="#28a745" />
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Order Form</Text>
        <CustomForm placeholder="Product Name" />
        <CustomForm placeholder="Quantity" keyboardType="numeric" />
        <CustomForm placeholder="Shipping Address" />
        <CustomButton title="Submit Order" onPress={() => handleSubmit('Order Form')} color="#ffc107" />
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Contact Form</Text>
        <CustomForm placeholder="Name" />
        <CustomForm placeholder="Email" />
        <CustomForm placeholder="Message" />
        <CustomButton title="Submit Contact" onPress={() => handleSubmit('Contact Form')} color="#6c757d" />
      </View>
    </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  form: {
    marginBottom: 30,
    width: '100%',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
});

export default FormScreen;







