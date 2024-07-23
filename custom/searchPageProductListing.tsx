import React, { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import productSearchStore from '../src/store/productSearch';
import { observer } from 'mobx-react-lite';
import Rating from './ratingComponent';

const SearchPageProductListing: React.FC = observer(() => {

    return(
        <View style={styles.productsContainer}>
            {
                productSearchStore.isLoading ? (
                        <ActivityIndicator color="#ff6633" size="large" /> 
                ) : (
                    <FlatList 
                    showsVerticalScrollIndicator = {false}
                    data={productSearchStore.filteredProducts.slice()}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.image}/>
                            <View style={styles.info}>
                                <Text style={styles.t1}>{item.category}</Text>
                                <Text style={styles.t2}>{item.title}</Text>
                                <Text style={styles.price}>₹{item.price}</Text>
                            </View>
                            { /* <View style={styles.rating}>
                                <Stars
                                    default={parseFloat(item.rating.rate)}
                                    count={5}
                                    half={true}
                                    starSize={150}
                                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                />
                                <Text style={styles.count}>     {item.rating.count}</Text>
                            </View> */}
                            <Rating rating={parseFloat(item.rating.rate)} />
                        </TouchableOpacity>
                    )}/>
                )
            }
        </View>
    )
})

export default SearchPageProductListing;

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'column',
        backgroundColor: '#f0f1f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 130,
    },
    item: {
        width: 150,
        height: 'auto',
        padding: 15,
        alignItems: 'flex-start',
        //justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        // Shadow for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 120,
        height: 100,
        marginRight: 10,
    },
    info: {
        alignSelf: 'flex-start',
    },
    t1: {
        fontFamily: 'Montserrat-SemiBold',
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
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    count: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
    },
    myStarStyle: {
        color: 'gold',
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: 'gray',
    },
});