// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useRouter } from 'expo-router';

 
// const SignUp = () => {
//   const [firstName, setfirstName] = useState('');
//   const [lastName, setlastName] = useState('');
//   const [dateOfBirth, setdateOfBirth] = useState('');
//   const [email, setEmail] = useState('');
//   const [confirmEmail, setconfirmEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setconfirmPassword] = useState('');


//   const handleLogin = () => {
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     };
// }

 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={setfirstName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Last Number"
//         value={lastName}
//         onChangeText={setlastName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Date of Birth"
//         value={dateOfBirth}
//         onChangeText={setdateOfBirth}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Email"
//         value={confirmEmail}
//         onChangeText={setconfirmEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setconfirmPassword}
//       />
//       <Button title="Sign Up" onPress={handleLogin} />
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     marginTop: 120,
//     alignItems:'center',

//   },
//   input: {
//     height: 50,
//     width:170,
//     borderColor: 'black',
//     borderWidth: 2,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 10,

//   },
//   title: {
//     fontSize: 50,
//     marginBottom:10,
//     marginTop:-150,
//     right: 100,
    

//   },
// });
 
// export default SignUp;

import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (email !== confirmEmail) {
      Alert.alert('Error', 'Emails do not match.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Add your sign-up logic here

    Alert.alert('Success', 'Account created successfully!');
    router.push('/');  // Navigate back to the login screen or another appropriate screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Email"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Pressable onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </Pressable>
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
  },
  signUpButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SignUp;
