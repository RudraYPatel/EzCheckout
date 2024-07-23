import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test' || password === 'aryan') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    };
}

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-In</Text>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems:'center',

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
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom:10,
    marginTop: -70,
    

  },
});
 
export default LoginForm;