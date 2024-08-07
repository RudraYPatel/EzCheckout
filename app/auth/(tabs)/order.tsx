import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const order = () => {
  
  const orders = [
    {
      id: '1',
      store: 'Walmart',
      date: 'May 21, 2024',
      total: '$97.37',
      items: ['Milk', 'Onions', 'Ginger', 'Yogurt', 'Rice']
    },
    {
      id: '2',
      store: 'Real Canadian Superstore',
      date: 'June 19, 2024',
      total: '$110.37',
      items: ['Popcorn', 'Egg', 'Doritos', 'Paneer']
    },
    {
      id: '3',
      store: 'Safeway',
      date: 'June 27, 2024',
      total: '$120.57',
      items: ['Pepper', 'Garlic', 'Old Dutch', 'Strawberry', 'Kitkat', 'Wheat Flour']
    },
    {
      id: '4',
      store: 'Freshco',
      date: 'August 1, 2024',
      total: '$99.99',
      items: ['Pepper', 'Garlic', 'Old Dutch', 'Strawberry', 'Almonds', 'T-Shirt', 'Cashew', 'Table Cloth']
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.storeName}>{item.store}</Text>
      <Text style={styles.orderInfo}>
        {item.items.length} items · Delivered {item.date} · {item.total}
      </Text>
      <View style={styles.itemsContainer}>
        {item.items.map((itemName, index) => (
          <Text key={index} style={styles.item}>
            {itemName}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add all to cart</Text>
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Previous Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  orderContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderInfo: {
    color: '#555',
    marginVertical: 8,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  item: {
    backgroundColor: '#eee',
    padding: 8,
    margin: 4,
    borderRadius: 4,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007B55',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


