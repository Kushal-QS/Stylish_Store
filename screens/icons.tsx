import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyInputField: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="user" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const MyPasswordField: React.FC = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Icon name="lock" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.eyeIconContainer}>
        <Icon name={secureTextEntry ? "eye-slash" : "eye"} size={20} color="#000" style={styles.eyeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <MyInputField />
      <MyPasswordField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingVertical: 10,
    color: '#000',
  },
  eyeIconContainer: {
    padding: 10,
  },
  eyeIcon: {
    marginRight: 10,
  },
});

export default App;
