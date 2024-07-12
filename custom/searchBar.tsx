import React from 'react';

import{
    SafeAreaView,
    View,
    TextInput,
    Image,
    StyleSheet,
    StyleProp,
    ViewStyle,
} from 'react-native';

import {useForm, Controller} from "react-hook-form"

import Feather from 'react-native-vector-icons/Feather';
import CustomFormTextInput from './customFormTextInput';

interface SearchBarProps {
    customStyles?: StyleProp<ViewStyle>;
}

const SearchBar: React.FC<SearchBarProps> = ({customStyles}) => {
    const { control, handleSubmit, formState: {errors}} = useForm<FormData>();

    return (
        <View style={[styles.searchBarWrapper, customStyles]}>
            <Feather name="search" size={20} color={'#867979'} style={styles.icon}/>
            <CustomFormTextInput 
                name="searchBar" 
                control={control} 
                placeholder="Search any Product.."
                style={styles.input}
            />
            <Feather name="mic" size={20} color={'#867979'} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ffffff",
        height: 50,
    },
    input: {
        flex: 1,
        fontSize: 15,
        fontFamily: "Montserrat-Regular",
    },
    icon: {
        paddingHorizontal: 10,
    }
})

export default SearchBar;