import React from 'react';
import {View, TextInput, Text, TextInputProps, StyleSheet} from 'react-native';
import {Controller, Control} from 'react-hook-form';

interface CustomFormTextInputProps extends TextInputProps {
    name: string;
    control: Control<any>;
    placeholder: string;
    defaultValue?: string;
    props?: TextInputProps
}

const CustomFormTextInput: React.FC<CustomFormTextInputProps> = ({name, control, placeholder, defaultValue='', props={}}) => {
    return (
      <Controller 
        name={name}
        control={control}
        render={({field: { onChange, onBlur, value}})=>(
          <TextInput 
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...props}
            style={styles.input}
          />
        )}
        defaultValue={defaultValue}
      />
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

export default CustomFormTextInput;