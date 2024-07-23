//cart listing
import React, { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ProductDetails from '../screens/productDetails';

import { RootState, AppDispatch } from '../src/store/store';
import { fetchCartProducts, fetchProductDetails, increaseQuantity, decreaseQuantity, deleteProduct} from '../src/store/cartReducer'
import { useDispatch, useSelector } from 'react-redux';

//import { HomeStackParamList } from '../types';
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'ProductDetails'>;

const CartProductListing: React.FC = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, products, productsDetailed } = useSelector((state: RootState) => state.cart);

    useEffect(()=>{
        dispatch(fetchCartProducts());
    }, []);

    useEffect(() => {
        if(products.length > 0){
            dispatch(fetchProductDetails(products));
            console.log("Products with details fetched");
        }
    }, [products]);

    const renderProduct = ({ item }: {item: ProductDetailed}) => (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.t1}>{item.category}</Text>
                <Text style={styles.t2}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={styles.quantity}>Quantity : {item.quantity}</Text>
                <View style={styles.quantityButtons}>
                    <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.id))}>
                        <Icon name="minus" size={24} color="#000" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))}>
                        <Icon name="plus" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.deleteIcon} onPress={() => dispatch(deleteProduct(item.id))}>
                <Icon name="delete-outline" size={24} color="#ff6633" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return(
        <>
        {
            isLoading ? (
                <ActivityIndicator color="#ff6633" size="large" />
            ) : (
                <FlatList 
                numColumns={1}
                showsVerticalScrollIndicator = {false}
                data={productsDetailed}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                />
            )
        }  
        </>
    )
}

export default CartProductListing;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: 320,
        padding: 15,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        // Shadow for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    image: {
        width: 110,
        height: 150,
        marginRight: 10,
    },
    info: {
        alignSelf: 'flex-start',
        flex: 1,
    },
    t1: {
        fontFamily: 'Montserrat-Bold',
        color: '#000000',
        fontSize: 12,
    },
    t2: {
        fontFamily: 'Montserrat-Regular',
        color: '#000000',
        fontSize: 10,
        marginVertical: 2,
    },
    price: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 12,
        marginVertical: 2,
    },
    quantity: {
        fontFamily: 'Montserrat-Bold',
        color: '#ff6633',
        fontSize: 12,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        width: 70,
        //borderWidth: 0.5,
        justifyContent: 'space-around',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 2,
    },
    deleteIcon: {
        borderWidth: 1,
        padding: 2,
        borderRadius: 50,
        borderColor: '#ff6633',
    }
});