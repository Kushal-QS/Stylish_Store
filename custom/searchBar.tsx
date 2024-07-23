import React, { useState } from 'react';

import{
    SafeAreaView,
    View,
    TextInput,
    Image,
    StyleSheet,
    StyleProp,
    ViewStyle,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import productSearchStore from '../src/store/productSearch';

interface SearchBarProps {
    customStyles?: StyleProp<ViewStyle>;
    setGlobalSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({customStyles, setGlobalSearchQuery}) => {
    const [localSearchValue, setLocalSearchValue] = useState("")

    const handleChangeText = (text: string) => {
        setLocalSearchValue(text);
        setGlobalSearchQuery(text);
    }

    return (
        <View style={[styles.searchBarWrapper, customStyles]}>
            <Feather name="search" size={20} color={'#867979'} style={styles.icon}/>
            <TextInput 
                value={localSearchValue}
                onChangeText={handleChangeText} 
                placeholder="Search..."
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