import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import logo from '@/assets/images/logo.webp';

const PaymentSetup = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handlePayment = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '' || cardHolderName === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    Alert.alert('Success', 'Payment processed successfully.');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image source={logo} style={styles.logo1} />
      <Text style={styles.title}>EZ Checkout</Text>
      <Text style={styles.title1}>Payment Set-up</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={setExpiryDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Name on Card"
        value={cardHolderName}
        onChangeText={setCardHolderName}
      />
      <Pressable onPress={handlePayment} style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
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
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 120,
  },
  payButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    bottom: 110,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
  },
  title1: {
    fontSize: 24,
    marginBottom: 20,
    bottom: 120,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    bottom: 140,
  },
  logo1: {
    height: 600,
    width: 500,
    borderRadius: 300,
    bottom: 160,
    opacity: 0.8,
  },
});

export default PaymentSetup;