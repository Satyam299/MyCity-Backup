import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    const signupData = {
      email: email,
    };

    // Make a POST request to the signup API
    fetch('http://creat8.in/mycity/api/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'true') {
          Alert.alert('Verification Code Sent', data.message);
          // Navigate to the next screen or perform any other actions after successful signup
        } else {
          Alert.alert('Signup Failed', data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Signup Failed', 'An error occurred during signup.');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
