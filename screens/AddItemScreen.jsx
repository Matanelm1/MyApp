import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomForm from '../components/CustomForm';

const AddItemScreen = ({ navigation, route }) => {
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState('');

  const handleAddItem = () => {
    if (itemName && itemImage) {
      route.params.addItem({ id: Date.now().toString(), name: itemName, image: itemImage });
      navigation.goBack();
    } else {
      alert('Please enter an item name and image URL');
    }
  };

  return (
    <View style={styles.container}>
      <CustomForm
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <CustomForm
        placeholder="Image URL"
        value={itemImage}
        onChangeText={setItemImage}
      />
      <CustomButton title="Add Item" onPress={handleAddItem} />
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

export default AddItemScreen;

