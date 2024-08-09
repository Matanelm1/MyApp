import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const ShoppingListScreen = () => {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addItem = () => {
    if (itemName.trim()) {
      setItems([...items, { id: Date.now().toString(), name: itemName, price: Math.floor(Math.random() * 100) + 1 }]);
      setItemName('');
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - ₪{item.price}</Text>
            <TouchableOpacity style={styles.cartButton} onPress={() => addToCart(item)}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart</Text>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name} - ₪{item.price}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.totalPrice}>Total Price: ₪{getTotalPrice()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  itemText: {
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#FFFFFF',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#FFFFFF',
  },
  cartContainer: {
    marginTop: 20,
  },
  cartTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default ShoppingListScreen;





