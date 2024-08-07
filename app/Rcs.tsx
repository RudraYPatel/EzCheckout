import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const products = [
  { id: '1', name: 'Apples', price: '$3.99/lb', image: require('@/assets/images/apples.avif')},
  { id: '2', name: 'Bananas', price: '$1.29/lb', image: require('@/assets/images/banana.png')},
  { id: '3', name: 'Carrots', price: '$2.99/lb', image: require('@/assets/images/carrot.webp')},
  { id: '4', name: 'Tomatoes', price: '$4.99/lb', image: require('@/assets/images/tomato.jpg')},
  { id: '5', name: 'Milk', price: '$1.99/L', image: require('@/assets/images/milk.jpg') },
  { id: '6', name: 'Bread', price: '$2.49/loaf', image: require('@/assets/images/bread.webp') },
  { id: '7', name: 'Eggs', price: '$2.99/dozen', image: require('@/assets/images/eggs.webp') },
  { id: '8', name: 'Chicken Breast', price: '$9.99/kg', image: require('@/assets/images/chicken.png') },
  { id: '9', name: 'Orange Juice', price: '$3.49/L', image: require('@/assets/images/orange_juice.png') },
  { id: '10', name: 'Yogurt', price: '$1.99/each', image: require('@/assets/images/yogurt.webp') },
];

const Rcs = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Real Canadian Superstore</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Rcs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,

  },
  list: {
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '48%',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#007B55',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});