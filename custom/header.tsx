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

import Feather from 'react-native-vector-icons/Feather';

interface HeaderProps {
    customStyles?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({customStyles}) => {
    return (
        <View style={[styles.headerContainer, customStyles]}>
            <View style={styles.menuIconContainer}>
                <Feather name="menu" size={30} color={'#867979'} />
            </View>

            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                />
                <Image 
                    source={require('../assets/images/stylish.png')}
                    style={styles.textLogo}
                />
            </View>

            <View style={styles.profileContainer}>
                <Image 
                    source={require('../assets/images/profileLogo.png')}
                    style={styles.textLogo}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    menuIconContainer: {

    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginRight: 5,
    },
    textLogo: {
        marginLeft: 5,
    },
    profileContainer: {

    }
})

export default Header;

