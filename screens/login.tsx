import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {useForm, Controller} from "react-hook-form"
import CustomFormTextInput from '../custom/customFormTextInput';
//import styles from '../styling/loginStyles';
import { Image, Button} from 'react-native-elements';

type FormData = {
  email: string;
  password: string;
};

function LoginScreen(props): React.JSX.Element {

  const { control, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputWrapper}>
          <CustomFormTextInput 
            name="Username or Email" 
            control={control} 
            placeholder="Enter Your Email"
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <CustomFormTextInput 
            name="password" 
            control={control} 
            placeholder="Password"
            style={styles.input}
            props={{
              secureTextEntry: true,
              autoCapitalize: "none"
            }}
          />
        </View>

        <View style={styles.forgotContainer}>
          <TouchableOpacity onPress={() => {}} >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        
        <Button title="Login" buttonStyle={styles.loginButton} onPress={handleSubmit(onSubmit)} />
      </View>

      <View style={styles.socialLogin}>
        <Text>-Or Continue With-</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={()=>{}}>
            <Image source={require('../assets/images/google-icon.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <Image source={require('../assets/images/facebook-icon.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <Image source={require('../assets/images/twitter-icon.png')} style={styles.socialIcon}/>
          </TouchableOpacity>
        </View>
        <Text>Create An Account-
          
            <Text style={styles.signUpText}>Sign Up</Text>
          
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    width: '50%',
    height: '20%',
    alignSelf: 'flex-start',
    paddingLeft: 30
  },
  welcomeText: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 45,
    fontWeight: 'bold',
  },
  loginContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    paddingLeft: 30,
  },
  inputWrapper: {
    //position: 'relative',
    width: '100%',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#A8A8A9',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginVertical: 10,
  },
  forgotContainer: {
    paddingRight: 33,
    alignSelf: 'flex-end',
  },
  forgotText: {
    color: '#F83758',
  },
  loginButton: {
    width: 300,
    marginTop: 50,
    textAlign: 'center',
    height: 50,
    marginRight: 33,
    backgroundColor: '#F83758',
    borderRadius: 5,
  },
  socialLogin: {
    alignItems: 'center',
    //marginTop: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    width: '60%',
    marginVertical: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    margin: 5,
  },
  signUpText: {
    color: '#F83758',
  },
  lowerText: {
    marginTop: 10,
  }

});

export default LoginScreen;
