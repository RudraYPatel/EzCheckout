"use client"
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Apples', price: 3.99, image: require('@/assets/images/apples.avif'), description: 'Fresh and juicy apples. These apples are organic and weigh approximately 1 lb each. Perfect for snacking or baking.', details: 'Weight: 1 lb, Quantity: 5, Organic: Yes' },
  { id: '2', name: 'Bananas', price: 1.29, image: require('@/assets/images/banana.png'), description: 'Ripe and sweet bananas. Each bunch weighs around 1.5 lbs. Great for smoothies and snacks.', details: 'Weight: 1.5 lb, Quantity: 6, Organic: No' },
  { id: '3', name: 'Carrots', price: 2.99, image: require('@/assets/images/carrot.webp'), description: 'Organic carrots. Each bundle weighs 1 lb and contains around 10 carrots. Ideal for salads and cooking.', details: 'Weight: 1 lb, Quantity: 10, Organic: Yes' },
  { id: '4', name: 'Tomatoes', price: 4.99, image: require('@/assets/images/tomato.jpg'), description: 'Red and ripe tomatoes. Each pack weighs 1 lb and includes 4 tomatoes. Perfect for sauces and salads.', details: 'Weight: 1 lb, Quantity: 4, Organic: No' },
  { id: '5', name: 'Milk', price: 1.99, image: require('@/assets/images/milk.jpg'), description: 'Fresh cow milk. This organic milk is sold by the liter and is sourced from local farms.', details: 'Volume: 1 L, Organic: Yes' },
  { id: '6', name: 'Bread', price: 2.49, image: require('@/assets/images/bread.webp'), description: 'Whole grain bread. Each loaf is baked fresh and weighs around 1 lb. Ideal for sandwiches and toast.', details: 'Weight: 1 loaf, Organic: Yes' },
  { id: '7', name: 'Eggs', price: 2.99, image: require('@/assets/images/eggs.webp'), description: 'Organic eggs. Each carton contains 12 eggs. Perfect for breakfast or baking.', details: 'Quantity: 12, Organic: Yes' },
  { id: '8', name: 'Chicken Breast', price: 9.99, image: require('@/assets/images/chicken.png'), description: 'Boneless chicken breast. Each pack weighs 1 kg. Great for grilling or baking.', details: 'Weight: 1 kg, Organic: No' },
  { id: '9', name: 'Orange Juice', price: 3.49, image: require('@/assets/images/orange_juice.png'), description: 'Freshly squeezed orange juice. Sold by the liter, this juice is made from organic oranges.', details: 'Volume: 1 L, Organic: Yes' },
  { id: '10', name: 'Yogurt', price: 1.99, image: require('@/assets/images/yogurt.webp'), description: 'Natural yogurt. Each container holds 200 g of creamy, organic yogurt. Perfect for a healthy snack.', details: 'Weight: 200 g, Organic: Yes' },
];

const Safeway = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {}));

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] + amount, 0),
    }));
  };

  const handleCheckout = () => {
    const cartItems = products.filter((product) => quantities[product.id] > 0).map((product) => ({
      ...product,
      quantity: quantities[product.id],
    }));
    setCart(cartItems);
    navigation.navigate('CheckOut', { cart: JSON.stringify(cartItems) });
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => handleQuantityChange(item.id, -1)} />
        <Text style={styles.quantityText}>{quantities[item.id]}</Text>
        <Button title="+" onPress={() => handleQuantityChange(item.id, 1)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Safeway</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
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
    margin: 10,
    alignItems: 'center',
    flex: 1,
    minWidth: '48%',
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
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: '#007B55',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
