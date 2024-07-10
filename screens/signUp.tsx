import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {useForm, Controller} from "react-hook-form"
import CustomFormTextInput from '../custom/customFormTextInput';
//import styles from '../styling/loginStyles';
import { Image, Button} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
  
type FormData = {
  email: string;
  password: string;
};

function SignupScreen(props): React.JSX.Element {
  const { control, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View  style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Create an account</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <CustomFormTextInput 
                name="Username or Email" 
                control={control} 
                placeholder="Username or Email"
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

            <View style={styles.inputWrapper}>
              <CustomFormTextInput 
                name="confirm_password" 
                control={control} 
                placeholder="Confirm Password"
                style={styles.input}
                props={{
                  secureTextEntry: true,
                  autoCapitalize: "none"
                }}
              />
            </View>

            <TouchableOpacity style={styles.policy} onPress={()=>{console.log("Agreed!")}}>
              <Text>By clicking the <Text style={styles.terms}>Register</Text> button, you agree to the public offer</Text>
            </TouchableOpacity>

            <View style={styles.formCreateAccount}>
                <TouchableOpacity onPress={()=> {}}>
                  <View style={styles.createAccountBtn}>
                    <Text style={styles.createAccountText}>Create Account</Text>
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
          <TouchableOpacity style={{marginTop: 'auto'}} onPress={()=>{props.navigation.navigate("Login")}}>
            <Text style={styles.footer}>I Already have an Account{' '}
              <Text style={{textDecorationLine: 'underline', color: '#F85758'}}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    width: '60%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#000',
  },
  form: {
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  inputWrapper: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A8A8A9',
    backgroundColor: '#E3E3E3',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 12,
    fontSize: 15,
    fontWeight: '500',
  },
  forgot: {
    fontSize: 15,
    color: '#F85758',
    textAlign: 'right',
    marginTop: 5,
  },
  policy: {
    width: '75%',
    fontSize: 15,
    marginTop: 15,
  },
  terms: {
    color: '#F85758'
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
  },
  formCreateAccount: {
    marginTop: 30,
    marginBottom: 10,
  },
  createAccountBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F85758',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
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
    marginHorizontal: 10,
  },
  footer: {
    fontSize: 15,
  }
})