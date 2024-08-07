import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const products = [
  { id: '1', name: 'Milk', price: '$2.99/L', image: require('@/assets/images/milk.jpg') },
  { id: '2', name: 'Bread', price: '$1.99/loaf', image: require('@/assets/images/bread.webp') },
  { id: '3', name: 'Eggs', price: '$3.49/dozen', image: require('@/assets/images/eggs.webp') },
  { id: '4', name: 'Cheese', price: '$5.99/pack', image: require('@/assets/images/cheese.jpg') },
  { id: '5', name: 'Butter', price: '$4.49/pack', image: require('@/assets/images/butter.png') },
  { id: '6', name: 'Yogurt', price: '$3.99/pack', image: require('@/assets/images/yogurt.webp') },
  { id: '7', name: 'Orange Juice', price: '$4.99/L', image: require('@/assets/images/orange_juice.png') },
  { id: '8', name: 'Chicken Breast', price: '$9.99/kg', image: require('@/assets/images/chicken.png') },
  { id: '9', name: 'Rice', price: '$2.99/kg', image: require('@/assets/images/rice.jpg') },
  { id: '10', name: 'Pasta', price: '$1.49/pack', image: require('@/assets/images/pasta.jpg') },
];


const Walmart = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
              <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.title}>Walmart</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
      />
    </View>
  );
};

export default Walmart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
      marginRight: 10,
      marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    marginTop: 50,
  },
  list: {
    alignItems: 'center',
  },
  productContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '45%', 
    marginHorizontal: '2.5%',
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
    textAlign: 'center',
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