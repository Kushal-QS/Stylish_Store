import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

function LoginScreen(props): React.JSX.Element {
  return (
    <View style={styles.container}>
        <Text>This is Login Page!</Text>
        <Button 
          title="Forgot password" 
          onPress={() => props.navigation.navigate("ForgotPassword")}
        />
        <Button 
          title="Sign Up"
          onPress={() => props.navigation.navigate("Signup")}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    width: 200,
  },
});

export default LoginScreen;
