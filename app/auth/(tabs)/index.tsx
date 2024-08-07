import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import discount1 from '@/assets/images/discount1.webp';
import discount2 from '@/assets/images/discount2.webp';
import rcs from '@/assets/images/rcs.jpg';
import walmart from '@/assets/images/walmart.jpg';
import safeway from '@/assets/images/safeway.png';
import freshco from '@/assets/images/freshco.png';

const Index = () => {
  const router = useRouter();

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'You have been signed out.');
  };

  const handleRcsPress = () => {
    router.push('/Rcs');
  };

  const handleWalmartPress = () => {
    router.push('/Walmart');
  };

  const handleSafewayPress = () => {
    router.push('/Safeway');
  };

  const handleFreshCoPress = () => {
    router.push('/FreshCo');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
          <Feather name="log-out" size={24} color="black" />
        </TouchableOpacity>
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
          <TouchableOpacity style={styles.storeItem} onPress={handleRcsPress}>
            <Image source={rcs} style={styles.storeImage} />
            <Text style={styles.storeName}>Real Canadian Superstore</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storeItem} onPress={handleWalmartPress}>
            <Image source={walmart} style={styles.storeImage} />
            <Text style={styles.storeName}>Walmart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storeItem} onPress={handleSafewayPress}>
            <Image source={safeway} style={styles.storeImage} />
            <Text style={styles.storeName}>Safeway</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storeItem} onPress={handleFreshCoPress}>
            <Image source={freshco} style={styles.storeImage} />
            <Text style={styles.storeName}>Fresh Co</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;

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
    marginTop: 50,
  },
  signOutButton: {
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
    borderColor: 'black',
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
    color: 'black',
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
    borderRadius: 10,
  },
  discount2: {
    height: 189,
    width: 350,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: 'black',
  },
  storeTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
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
