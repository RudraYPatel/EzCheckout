// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet, Text, Pressable, Image } from 'react-native';
// import { useRouter } from 'expo-router';
// import logo from '@/assets/images/logo.webp';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (email === 'test' && password === 'aryan') {
//       router.push("/auth");
//     } else {
//       Alert.alert('Error', 'Invalid credentials.');
//     } 
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={logo} style={styles.logo1} />
//       <Text style={styles.title}>EZ Checkout</Text>
//       <Text style={styles.title1}>SIGN-IN</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Pressable onPress={handleLogin} style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>LOGIN</Text>
//       </Pressable>
//       <Text style={styles.signupText}>
//         Don't have an account? <Text style={styles.signupLink} onPress={() => router.push('/components/SignUp')}>SignUp</Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   input: {
//     height: 50,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     bottom: 120,
//   },
//   loginButton: {
//     backgroundColor: 'green',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 20,
//     bottom: 110,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,

//   },
//   signupText: {
//     fontSize: 16,
//     bottom: 110,
//   },
//   signupLink: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   title1: {
//     fontSize: 24,
//     marginBottom: 20,
//     bottom: 120,
//     },
//   title:{
//     fontSize: 50,
//     textAlign: 'center',
//     bottom: 140,
//   },
//   logo1:{
//     height: 600,
//     width: 500,
//     borderRadius: 300,
//     bottom: 160,
//     opacity: 0.8,
//   }
// });

// export default Login;

import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '@/assets/images/logo.webp';

const Login = () => {
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
      <Image source={logo} style={styles.logo1} />
      <Text style={styles.title}>EZ Checkout</Text>
      <Text style={styles.title1}>SIGN-IN</Text>
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
      <Pressable onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </Pressable>
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => router.push('/signup')}>
          SignUp
        </Text>
      </Text>
    </View>
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
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 120,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    bottom: 110,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    bottom: 110,
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
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

export default Login;
