import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/images/user.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image source={require('../assets/images/lock.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity onPress={() => { /* Handle forgot password */ }}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          title="Login"
          buttonStyle={styles.loginButton}
          onPress={() => { /* Handle login */ }}
        />

        <View style={styles.socialLogin}>
          <Text>-Or Continue With-</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => { /* Handle Google login */ }}>
              <Image source={require('../assets/images/google-icon.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle Facebook login */ }}>
              <Image source={require('../assets/images/facebook-icon.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* Handle Twitter login */ }}>
              <Image source={require('../assets/images/twitter-icon.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <Text>
            Create An Account
            <Text style={styles.signupText} onPress={() => { /* Handle sign up */ }}> Sign Up</Text>
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  welcomeContainer: {
    width: '75%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginContainer: {
    width: '100%',
    maxWidth: 330,
    alignItems: 'center',
    paddingVertical: 20,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    marginVertical: 10,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -30 }],
    width: 24,
    height: 24,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#F3F3F3',
    borderColor: '#A8A8A9',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 40,
    fontSize: 16,
  },
  forgotText: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    color: '#F83758',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#F83758',
    borderRadius: 8,
    marginTop: 30,
  },
  socialLogin: {
    alignItems: 'center',
    marginTop: 40,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  signupText: {
    color: '#F83758',
    marginLeft: 5,
  },
});
