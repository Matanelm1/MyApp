import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const products = [
  { id: '1', name: 'T-shirt', price: 50 },
  { id: '2', name: 'Jeans', price: 150 },
  { id: '3', name: 'Jacket', price: 300 },
  { id: '4', name: 'Sweater', price: 100 },
  { id: '5', name: 'Dress', price: 200 },
  { id: '6', name: 'Skirt', price: 120 },
  { id: '7', name: 'Shoes', price: 250 },
  { id: '8', name: 'Hat', price: 80 },
  { id: '9', name: 'Scarf', price: 60 },
  { id: '10', name: 'Belt', price: 40 },
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - ₪{item.price}</Text>
          </View>
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
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ListScreen;


