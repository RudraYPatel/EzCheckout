import React, { useState } from 'react';
import { View, Alert, StyleSheet, Text, Pressable, Image, FlatList, KeyboardAvoidingView, Platform, Button } from 'react-native';
import logo from '@/assets/images/logo.webp';
import { useSearchParams } from 'expo-router';

const CheckOut = () => {
  const { cart: cartString } = useSearchParams();
  const initialCart = JSON.parse(cartString);

  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 0) } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
        <Text style={styles.totalPrice}>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Pressable onPress={() => handleQuantityChange(item.id, -1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </Pressable>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <Pressable onPress={() => handleQuantityChange(item.id, 1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</Text>
      <Image source={logo} style={styles.logo1} />
      <Text style={styles.title}>EZ Checkout</Text>
      <Pressable onPress={() => Alert.alert('Proceed to Payment')} style={styles.payButton}>
        <Text style={styles.payButtonText}>Proceed to Payment</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  list: {
    justifyContent: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007B55',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 10,
  },
  totalAmount: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  logo1: {
    height: 600,
    width: 500,
    borderRadius: 300,
    bottom: 160,
    opacity: 0.8,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    bottom: 140,
  },
  payButton: {
    backgroundColor: '#007B55',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckOut;