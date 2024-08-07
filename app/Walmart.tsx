"use client"
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, Button } from 'react-native';
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

const Walmart = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleImagePress = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleAddToCart = () => {
    const newCart = [...cart, { ...selectedProduct, quantity }];
    setCart(newCart);
    setModalVisible(false);
    setQuantity(1);
    navigation.navigate('CheckOut', { cart: newCart });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item)}>
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Walmart</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setQuantity(1);
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
                setQuantity(1);
              }}
            >
              <Feather name="x" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.modalContent}>
              <Image source={selectedProduct.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
              <Text style={styles.modalPrice}>${selectedProduct.price.toFixed(2)}</Text>
              <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
              <Text style={styles.modalDetails}>{selectedProduct.details}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} />
                <Text style={styles.quantityText}>{quantity}</Text>
                <Button title="+" onPress={() => setQuantity(quantity + 1)} />
              </View>
              <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Walmart;

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
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 50,
    zIndex: 1,
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
  },
  modalContent: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  modalPrice: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalDetails: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
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
    marginHorizontal: 10,
  },
});