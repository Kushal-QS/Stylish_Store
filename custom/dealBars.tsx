import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

interface dealProps {
    title: string;
    info: string;
    button: string;
    customStyle?: ViewStyle | ViewStyle[];
}

const DealBar: React.FC<dealProps> = ({title, info="hurry up", button, customStyle}) => {
    return(
        <View style={[styles.deal, customStyle]}>
            <View style={styles.textPart}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>{info}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    deal: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'flex-start'

    },
    textPart: {
        
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        color: '#ffffff',
        fontSize: 15,
    },
    info1: {
        fontFamily: 'Montserrat-Regular',
        color: '#ffffff',
        fontSize: 11,
        marginVertical: 5,
    },
    info: {
        fontFamily: 'Montserrat-Regular',
        color: '#ffffff',
        fontSize: 11,
    },
    button: {
        alignSelf: 'center',
        borderWidth: 1.5,
        padding: 10,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        fontSize: 11,
        textAlign: 'center'
    }
})

export default DealBar;