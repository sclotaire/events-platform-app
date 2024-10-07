// LoginPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ffffff"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => console.log('Login pressed')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupPrompt}>
        Don't have an account? 
        <Text 
          style={styles.signupLink} 
          onPress={() => navigation.navigate('SignUp')}
        >
          {' '}Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',      // Center content horizontally
    backgroundColor: '#4F75FF',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#6439ff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#ffffff', // Text color inside the input
  },
  loginButton: {
    backgroundColor: '#00ccdd',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  signupPrompt: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  signupLink: {
    color: '#d7cf5f', // Use a different color for the link
    fontWeight: 'bold',
  },
});

export default LoginPage;


// // LoginScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import auth from '@react-native-firebase/auth';


// const LoginPage = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [errorMessage, setErrorMessage] = useState('');

//   // const handleLogin = async () => {
//   //   try {
//   //     await auth().signInWithEmailAndPassword(email, password);
//   //     // Navigate to the next screen or show success message
//   //   } catch (error) {
//   //     setErrorMessage(error.message);
//   //   }
//   // };

//   return (
//     <Text>
//       Login Page
//     </Text>
//   //   <View style={styles.container}>
//   //     <TextInput
//   //       style={styles.input}
//   //       placeholder="Email"
//   //       value={email}
//   //       onChangeText={setEmail}
//   //     />
//   //     <TextInput
//   //       style={styles.input}
//   //       placeholder="Password"
//   //       value={password}
//   //       onChangeText={setPassword}
//   //       secureTextEntry
//   //     />
//   //     {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
//   //     <Button title="Login" onPress={handleLogin} />
//   //   </View>
//    );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 16,
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     marginBottom: 12,
// //     paddingLeft: 8,
// //   },
// //   error: {
// //     color: 'red',
// //     marginBottom: 12,
// //   },
// // });

// export default LoginPage;
