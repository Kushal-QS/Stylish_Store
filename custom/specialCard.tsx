import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ViewStyle,
    Image,
} from 'react-native';

interface specialCardProps {
    title: string;
    info: string;
    customStyle?: ViewStyle | ViewStyle[];
}

const SpecialCard: React.FC<specialCardProps> = ({title, info="hurry up", customStyle}) => {
    return(
        <View style={[styles.specialCard, customStyle]}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/specialOfferLogo.png')}
                    style={styles.logo}
                />
            </View>
            
            <View style={styles.textPart}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    specialCard: {
        borderRadius: 10,
        flexDirection: 'row',
        //padding: 10,
    },
    textPart: {
        margin: 5,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: '#000000',
        fontSize: 15,
    },
    info: {
        fontFamily: 'Montserrat-Regular',
        color: '#000000',
        fontSize: 11,
    },
    imageContainer: {
        margin: 10,
    },
    logo: {
        alignSelf: 'center',
        height: 50,
        width: 50,
    }
})

export default SpecialCard;