import React from 'react';
import {View, TextInput, Text, TextInputProps, StyleSheet, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {Controller, Control} from 'react-hook-form';

interface CustomFormTextInputProps extends TextInputProps {
    name: string;
    control: Control<any>;
    placeholder: string;
    defaultValue?: string;
    style?: StyleProp<ViewStyle | TextStyle>;
    props?: TextInputProps
}

const CustomFormTextInput: React.FC<CustomFormTextInputProps> = ({name, control, placeholder, defaultValue='', style, props={}}) => {
    
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
            style={style}
          />
        )}
        defaultValue={defaultValue}
      />
    )
}

export default CustomFormTextInput;