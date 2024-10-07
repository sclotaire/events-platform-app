// WelcomePage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import AppNavigation from './AppNavigation'
import { useNavigation } from '@react-navigation/native';

const WelcomePage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Northcoders Events App!</Text>
      <Text style={styles.subtitle}>Your journey begins here.</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F75FF', // Updated background color
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // Changed text color for better contrast
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff', // Changed text color for better contrast
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#6439ff', // Purple for Login button
  },
  signupButton: {
    backgroundColor: '#00ccdd', // Light Blue for Sign Up button
  },
  buttonText: {
    color: '#ffffff', // Text color for buttons
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WelcomePage;


// import { View, Text, SafeAreaView } from "react-native";
// import React from 'react'

// export default function WelcomePage() {

//     return(
//        <SafeAreaView className="flex-1" style={{backgroundColor: "rgb(79, 117, 255)"}}>
//             <View className="flex-1 flex justify-around my-4">
//                 <Text>hsbxhj
                    
                    
                    
                    
//                     hjbjs</Text>
//             </View>
//        </SafeAreaView>

//     )
// }