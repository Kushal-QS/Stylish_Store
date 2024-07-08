import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  function SignupScreen(): React.JSX.Element {
    return (
      <View style={styles.container}>
          <Text>Dear New user! Please Sign Up.</Text>
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
  
  export default SignupScreen;
  