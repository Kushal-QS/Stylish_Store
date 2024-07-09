import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button
} from 'react-native';

import {useForm, Controller} from "react-hook-form"
import CustomFormTextInput from '../custom/customFormTextInput';
import styles from '../styling/loginStyles';

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
      
      <CustomFormTextInput 
        name="email" 
        control={control} 
        placeholder="Enter Your Email"
        style={styles.input}
      />

      <CustomFormTextInput 
        name="password" 
        control={control} 
        placeholder="Enter Your Password"
        style={styles.input}
        props={{
          secureTextEntry: true,
          autoCapitalize: "none"
        }}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;
