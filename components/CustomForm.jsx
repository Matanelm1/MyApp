import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomForm = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default CustomForm;




