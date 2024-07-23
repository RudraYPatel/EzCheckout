import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '@/assets/images/logo.webp';
 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === '' || password === '') {
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
      <View style={styles.logo2}>
      <Image source={logo} style={styles.logo1} />
      </View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={handleLogin}>
        <Text style={styles.top}>Login</Text>
      </Pressable>
    </View>
  );
};
 
const styles = StyleSheet.create({

  logo1: {
    height: 600,
    width: 500,
    borderRadius: 250,
  }, 

  logo2: {
    marginBottom: 50,
    
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems:'center',
    backgroundColor:'ghostwhite',
    marginBottom: 200,

  },

  input: {
    height: 50,
    width:170,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,

  },

  top:{
    marginTop:20,
    fontSize:20,
  }, 
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom:10,
    
  },
});
 
export default LoginForm;