import React from 'react';
import {View, TextInput, Text, TextInputProps, StyleSheet, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {Controller, Control} from 'react-hook-form';

interface CustomSearchInputProps extends TextInputProps {
    searchVal?: string;
    onChangeText?: (text: string) => void;
    name: string;
    control: Control<any>;
    placeholder: string;
    defaultValue?: string;
    style?: StyleProp<ViewStyle | TextStyle>;
    props?: TextInputProps
}

const CustomSearchInput: React.FC<CustomSearchInputProps> = ({searchVal, onChangeText, name, control, placeholder, defaultValue='', style, props={}}) => {
    
  return (
      <Controller
        name={name}
        control={control}
        render={({field: { onChange, onBlur, value}})=>(
          <TextInput 
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={searchVal}
            {...props}
            style={style}
          />
        )}
        defaultValue={defaultValue}
      />
    )
}

export default CustomSearchInput;