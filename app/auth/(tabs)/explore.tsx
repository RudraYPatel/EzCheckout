import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import rcs from '@/assets/images/rcs.jpg';
import walmart from '@/assets/images/walmart.jpg';
import safeway from '@/assets/images/safeway.png';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="location-pin" size={24} color="black" />
        <Text style={styles.location}>Address</Text>
        <Feather name="shopping-cart" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products, stores, and recipes"
        />
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <MaterialIcons name="favorite-outline" size={24} color="black" />
          <Text>For you</Text>
        </View>
        <View style={styles.categoryItem}>
          <Feather name="percent" size={24} color="black" />
          <Text>Offers</Text>
        </View>
        <View style={styles.categoryItem}>
          <MaterialIcons name="local-shipping" size={24} color="black" />
          <Text>Pickup</Text>
        </View>
        <View style={styles.categoryItem}>
          <Feather name="shopping-bag" size={24} color="black" />
          <Text>Grocery</Text>
        </View>
        <View style={styles.categoryItem}>
          <Feather name="dollar-sign" size={24} color="black" />
          <Text>In-store prices</Text>
        </View>
      </View>

      {/* Stores List */}
      <View style={styles.storeList}>
        <View style={styles.storeItem}>
          <Image source={rcs} style={styles.storeImage} />
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>Real Canadian Superstore</Text>
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>$10 off</Text>
            </View>
          </View>
        </View>

        <View style={styles.storeItem}>
          <Image source={walmart} style={styles.storeImage} />
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>Walmart</Text>
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>$10 off Sun Protection & Bug Spray</Text>
              <Text style={styles.offerText}>In-store prices</Text>
            </View>
          </View>
        </View>

        <View style={styles.storeItem}>
          <Image source={safeway} style={styles.storeImage} />
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>Safeway</Text>
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>$10 off</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  storeList: {
    marginBottom: 20,
  },
  storeItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  storeImage: {
    width: 90,
    height: 60,
    marginRight: 10,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deliveryInfo: {
    color: 'green',
    marginVertical: 5,
  },
  offerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  offerText: {
    backgroundColor: 'yellow',
    paddingHorizontal: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  exploreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carrotImage: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exploreSubtitle: {
    color: '#555',
    marginBottom: 20,
  },
  viewAllButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  viewAllButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});