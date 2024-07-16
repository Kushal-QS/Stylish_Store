import React, { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Image, FlatList} from "react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Product {
    category: string,
    description: string,
    id: string,
    image: string,
    price: string,
    rating: RatingProp
    title: string,
}

interface RatingProp {
    count: string,
    rate: string,
}

interface ProductListingProps {
    searchQuery: string;
}

const ProductListing: React.FC<ProductListingProps> = ({searchQuery}) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts =() => {
        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
        .then((res) =>{
            return res.json();
        }).then((data)=>{
            //console.log(data);
            setProducts(data);
            setFilteredProducts(data);
        });
    };

    useEffect(() => {
        if(searchQuery.trim() === ''){
            setFilteredProducts(products);
        }else{
            console.log("Search Query: ", searchQuery);
            const filtered = products.filter(product => product.category.toLowerCase().includes(searchQuery.trim().toLowerCase()));
            setFilteredProducts(filtered);
        }
    }, [searchQuery, products]);

    return(
        <View style={styles.productsContainer}>
            <FlatList 
                showsVerticalScrollIndicator = {false}
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image}/>
                        <View style={styles.info}>
                            <Text style={styles.t1}>{item.category}</Text>
                            <Text style={styles.t2}>{item.title}</Text>
                            <Text style={styles.price}>₹{item.price}</Text>
                        </View>
                        <View style={styles.rating}>
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
                        </View>
                    </View>
            )}/>
        </View>
    )
}

export default ProductListing;

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'column',
        backgroundColor: '#f0f1f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 150,
    },
    item: {
        width: '47%',
        padding: 15,
        alignItems: 'flex-start',
        //justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    image: {
        width: '100%',
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