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

function LoginScreen(props): React.JSX.Element {

  const { control, handleSubmit, formState: {errors}} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View  style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
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

            <TouchableOpacity onPress={()=>{props.navigation.navigate("ForgotPassword")}}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.formLogin}>
                <TouchableOpacity onPress={()=> {}}>
                  <View style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

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


export default LoginScreen;

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
    fontSize: 15,
  }






})