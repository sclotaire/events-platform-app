// SignUpPage.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignUpPage = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ffffff"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ffffff"
        value={email}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        value={password}
        onChangeText={value => password(value)}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={() => console.log('Sign Up pressed')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginPrompt}>
        Already have an account? 
        <Text 
          style={styles.loginLink} 
          onPress={() => navigation.navigate('Login')}
        >
          {' '}Log In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  signupButton: {
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
  loginPrompt: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  loginLink: {
    color: '#d7cf5f', // Use a different color for the link
    fontWeight: 'bold',
  },
});

export default SignUpPage;
