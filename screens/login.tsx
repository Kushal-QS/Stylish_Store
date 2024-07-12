import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {useForm, Controller} from "react-hook-form"
import CustomFormTextInput from '../custom/customFormTextInput';
import { Image, Button} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
//import styles from '../styling/loginStyles';

type FormData = {
  email: string;
  password: string;
};

function LoginScreen(props): React.JSX.Element {

  const { control, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View  style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputWrapper}>
            <Icon name="user" size={20} color="#867979" style={styles.icon} />
              <CustomFormTextInput 
                name="Username or Email" 
                control={control} 
                placeholder="Username or Email"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#867979" style={styles.icon} />
              <CustomFormTextInput 
                name="password" 
                control={control} 
                placeholder="Password"
                style={styles.input}
                props={{
                  secureTextEntry: !visible,
                  autoCapitalize: "none"
                }}
              />
              <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.eyeIconContainer}>
                <Icon name={visible ? "eye" : "eye-slash"} size={20} color="#867979" style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{props.navigation.navigate("ForgotPassword")}}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.formLogin}>
                <TouchableOpacity onPress={()=>{props.navigation.replace("Main")}}>
                  <View style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <View style={styles.socialLogin}>
          <Text style={styles.footer}>-Or Continue With-</Text>
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
          <TouchableOpacity style={{marginTop: 'auto'}} onPress={()=>{props.navigation.navigate("Signup")}}>
            <Text style={styles.footer}>Create an account{' '}
              <Text style={{textDecorationLine: 'underline', color: '#F85758'}}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 35,
    color: '#000',
    fontFamily: "Montserrat-Bold",
  },
  form: {
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8A8A9',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    flexGrow: 1,
    height: 50,
    paddingHorizontal: 5,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: "Montserrat-Regular",
  },
  icon: {
    marginLeft: 10,
  },
  eyeIconContainer: {
    padding: 0,
  },
  eyeIcon: {
    marginRight: 10,
  },
  forgot: {
    fontSize: 12,
    color: '#F85758',
    textAlign: 'right',
    marginTop: 5,
    fontFamily: "Montserrat-Regular",
  },
  formLogin: {
    marginTop: 50,
    marginBottom: 10,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F85758',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    fontFamily: "Montserrat-Medium",
  },
  socialLogin: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  iconContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 10
  },
  footer: {
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
  }
})

export default LoginScreen;