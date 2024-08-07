import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const products = [
  { id: '1', name: 'Peanut Butter', price: '$4.99/jar', image: require('@/assets/images/peanut_butter.png') },
  { id: '2', name: 'Chocolate', price: '$2.49/bar', image: require('@/assets/images/chocolate.webp') },
  { id: '3', name: 'Spinach', price: '$1.99/bag', image: require('@/assets/images/spinach.webp') },
  { id: '4', name: 'Cereal', price: '$3.99/box', image: require('@/assets/images/cereal.png') },
  { id: '5', name: 'Almond Milk', price: '$3.49/L', image: require('@/assets/images/almond.png') },
  { id: '6', name: 'Ground Beef', price: '$5.99/lb', image: require('@/assets/images/ground_beef.jpg') },
  { id: '7', name: 'Pasta Sauce', price: '$2.99/jar', image: require('@/assets/images/pasta.jpg') },
  { id: '8', name: 'Frozen Pizza', price: '$6.99/each', image: require('@/assets/images/pizza.jpg') },
  { id: '9', name: 'Soda', price: '$1.49/can', image: require('@/assets/images/soda.webp') },
  { id: '10', name: 'Ice Cream', price: '$4.49/tub', image: require('@/assets/images/ice_cream.png') },
];

const Safeway = () => {
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
        <Text style={styles.title}> Safeway</Text>
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

export default Safeway;

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