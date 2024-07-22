import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../custom/header';

const ProductDetails = ({ route }) => {
    const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <Header customStyles={styles.customHeader} />
            <View style={styles.details}>
                <Image source={{ uri: product.image }} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <View style={styles.rating}>
                        <Stars
                            default={parseFloat(product.rating.rate)}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<Icon name={'star'} size={20} style={[styles.myStarStyle]} />}
                            emptyStar={<Icon name={'star-outline'} size={20} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                            halfStar={<Icon name={'star-half'} size={20} style={[styles.myStarStyle]} />}
                        />
                        <Text style={styles.count}>   {product.rating.count}</Text>
                    </View>
                    <Text style={styles.price}>₹{product.price}</Text>
                    <Text style={styles.descriptionHeading}>Product Details</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.cart}>
                    <Icon name={"cart-outline"} size={20} color={'#ffffff'} />
                    <Text style={styles.buttonText}>Go to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyNow}>
                    <Icon name={"cursor-pointer"} size={20} color={'#ffffff'} />
                    <Text style={styles.buttonText}>Buy now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  details: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  customHeader: {
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 450,
    },
    info: {
        alignSelf: 'flex-start',
        marginVertical: 10,
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 15,
    },
    category: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 12,
        marginVertical: 2,
    },
    price: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 15,
        marginVertical: 2,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5,
    },
    count: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        alignSelf: 'center',
    },
    myStarStyle: {
        color: 'gold',
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: 'gray',
    },
    descriptionHeading: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 12,
        marginTop: 5,
    },
    description: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 11,
        marginTop: 5,
    },
    buttons: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cart: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#3366FF',
        marginRight: 20,
        padding: 10,
    },
    buyNow: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#33CC33',
        padding: 10
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'Montserrat-Medium',
        marginLeft: 5,
    }
});

export default ProductDetails;
