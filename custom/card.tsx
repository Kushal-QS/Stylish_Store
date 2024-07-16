import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

interface AdvCardProps {
    imgSrc: string;
    offer: string;
    info1: string;
    info2?: string;
    button: string;
}

const getImageSource = (imgSrc: string) => {
    switch(imgSrc){
        case 'card1':
            return require('../assets/images/card1.jpg');
        case 'card2':
            return require('../assets/images/card2.jpg');
        case 'card3':
            return require('../assets/images/card3.jpg');
        default:
            return require('../assets/images/card1.jpg');
    }
}

const AdvCard: React.FC<AdvCardProps> = ({imgSrc, offer, info1, info2="hurry up", button}) => {
    const imageSource = getImageSource(imgSrc);
    return(
        <View style={styles.cardContainer}>
            <ImageBackground
                source={imageSource}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.textPart}>
                    <Text style={styles.offer}>{offer}</Text>
                    <Text style={styles.info1}>{info1}</Text>
                    <Text style={styles.info2}>{info2}</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Text style={styles.buttonText}>{button}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 335,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    imageStyle: {
        borderRadius: 10,
    },
    textPart: {
        marginLeft: 10,
    },
    offer: {
        fontFamily: 'Montserrat-Bold',
        color: '#ffffff',
        fontSize: 18,
    },
    info1: {
        fontFamily: 'Montserrat-Regular',
        color: '#ffffff',
        fontSize: 11,
        marginVertical: 5,
    },
    info2: {
        fontFamily: 'Montserrat-Regular',
        color: '#ffffff',
        fontSize: 11,
    },
    button: {
        marginTop: 10,
        borderWidth: 1.5,
        padding: 10,
        width: 90,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Montserrat-Medium',
        color: '#ffffff',
        fontSize: 11,
    }
})

export default AdvCard;