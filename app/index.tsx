import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '@/assets/images/logo.webp';
import Model from '@/components/Model'
import LoginForm from '@/components/login';
 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'test' || password === 'aryan') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
 
    if (email === 'test' && password === 'aryan') {
      router.push("/auth");
    } else {
      Alert.alert('Error', 'Invalid credentials.');
    } 
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo1} />
      <Text style={styles.title}>EZ Checkout</Text>
      {/* <Pressable onPress={handleLogin}>
        <Text style={styles.top}>Login</Text>
      </Pressable> */}
      <LoginForm />
      <Model />
    </View>
  );
};
 
const styles = StyleSheet.create({

  logo1: {
    height: 600,
    width: 500,
    borderRadius: 300,
    bottom: 130,
  }, 

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems:'center',
    backgroundColor:'ghostwhite',


  },

  input: {
    height: 50,
    width:170,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    bottom: 100,

  },

  title: {
    fontSize: 50,
    textAlign: 'center',
    bottom: 110,
  },
  
});
 
export default Login;

