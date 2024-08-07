import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '@/assets/images/logo.webp';

const Thanks = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/auth/');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image source={logo} style={styles.logo1} />
      <Text style={styles.title}>EZ Checkout</Text>
      <Text style={styles.title1}>Thank You for Shopping!</Text>
      <Text style={styles.message}>
        We appreciate your business and hope you enjoy your purchase. Thank you for choosing EZ Checkout. Have a wonderful day!
      </Text>
      <Pressable onPress={handleGoHome} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
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
  title1: {
    fontSize: 24,
    marginBottom: 20,
    bottom: 120,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    bottom: 110,
  },
  homeButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    bottom: 100,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Thanks;
