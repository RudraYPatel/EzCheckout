// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// const order = () => {
  
//   const orders = [
//     {
//       id: '1',
//       store: 'Walmart',
//       date: 'May 21, 2024',
//       total: '$97.37',
//       items: ['Milk', 'Onions', 'Ginger', 'Yogurt', 'Rice']
//     },
//     {
//       id: '2',
//       store: 'Real Canadian Superstore',
//       date: 'June 19, 2024',
//       total: '$110.37',
//       items: ['Popcorn', 'Egg', 'Doritos', 'Paneer']
//     },
//     {
//       id: '3',
//       store: 'Safeway',
//       date: 'June 27, 2024',
//       total: '$120.57',
//       items: ['Pepper', 'Garlic', 'Old Dutch', 'Strawberry', 'Kitkat', 'Wheat Flour']
//     },
//     {
//       id: '4',
//       store: 'Freshco',
//       date: 'August 1, 2024',
//       total: '$99.99',
//       items: ['Pepper', 'Garlic', 'Old Dutch', 'Strawberry', 'Almonds', 'T-Shirt', 'Cashew', 'Table Cloth']
//     },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.orderContainer}>
//       <Text style={styles.storeName}>{item.store}</Text>
//       <Text style={styles.orderInfo}>
//         {item.items.length} items · Delivered {item.date} · {item.total}
//       </Text>
//       <View style={styles.itemsContainer}>
//         {item.items.map((itemName, index) => (
//           <Text key={index} style={styles.item}>
//             {itemName}
//           </Text>
//         ))}
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Add all to cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
  
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}> Previous Orders</Text>
//       <FlatList
//         data={orders}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// }

// export default order

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 50,
//   },
//   orderContainer: {
//     marginBottom: 16,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//   },
//   storeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   orderInfo: {
//     color: '#555',
//     marginVertical: 8,
//   },
//   itemsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginVertical: 8,
//   },
//   item: {
//     backgroundColor: '#eee',
//     padding: 8,
//     margin: 4,
//     borderRadius: 4,
//   },
//   button: {
//     marginTop: 16,
//     backgroundColor: '#007B55',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '@/assets/images/logo.webp';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const router = useRouter();

  const handlePayment = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '' || cardHolderName === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    Alert.alert('Success', 'Payment processed successfully.');
    router.push('/Thanks'); 
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

export default Payment;

