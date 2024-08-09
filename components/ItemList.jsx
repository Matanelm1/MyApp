import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#F8F8F8',
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ItemList;

