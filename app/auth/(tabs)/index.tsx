// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const  index = () => {
//   return (
//     <View>
//       <Text>jjuhhhghbhu</Text>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({})

import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import discount1 from '@/assets/images/discount1.webp';
import discount2 from '@/assets/images/discount2.webp';
import rcs from '@/assets/images/rcs.jpg';
import walmart from '@/assets/images/walmart.jpg';
import safeway from '@/assets/images/safeway.png';
import freshco from '@/assets/images/freshco.png';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="shopping-cart" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products, stores, and recipes"
        />
      </View>

      {/* Promotional Banners */}
      <View>
      <Image source={discount1} style={styles.discount1} />
      <Image source={discount2} style={styles.discount2} />
      </View>

      {/* Store List */}
      <View style={styles.storeContainer}>
        <Text style={styles.storeTitle}>Shop by store</Text>
        <View style={styles.storeList}>
          <View style={styles.storeItem}>
            <Image source={rcs} style={styles.storeImage} />
            <Text style={styles.storeName}>Real Canadian Superstore</Text>
          </View>
          <View style={styles.storeItem}>
            <Image source={walmart} style={styles.storeImage} />
            <Text style={styles.storeName}>Walmart</Text>
          </View>
          <View style={styles.storeItem}>
            <Image source={safeway} style={styles.storeImage} />
            <Text style={styles.storeName}>Safeway</Text>
          </View>
          <View style={styles.storeItem}>
            <Image source={freshco} style={styles.storeImage} />
            <Text style={styles.storeName}>Fresh Co.</Text>
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
    marginTop: 10,
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
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
    borderRadius: 10,
    paddingLeft: 10,
  },
  exploreButton: {
    backgroundColor: '#007B55',
    borderRadius: 5,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  exploreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bannerText: {
    fontSize: 14,
    color: '#555',
  },
  bannerImage: {
    width: 80,
    height: 80,
  },
  storeContainer: {
    marginBottom: 20,
  },
  discount1: {
    height: 189,
    width: 350,
    borderRadius:10,
  },
  discount2: {
    height: 189,
    width: 350,
    borderRadius:10,
    marginTop:10,
    shadowColor:'black',
  },
  storeTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    marginTop:10,
  },
  storeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  storeItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
  },
  storeImage: {
    width: 120,
    height: 50,
    marginBottom: 5,
  },
  storeName: {
    textAlign: 'center',
  
  },
});

