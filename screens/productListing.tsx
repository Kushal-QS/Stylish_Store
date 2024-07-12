import React, { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Image, FlatList} from "react-native";

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

const ProductListing: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        getProducts();
    }, []);

    const getProducts =() => {
        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
        .then((res) =>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setProducts(data);

        });

    }

    return(
        <View style={styles.productsContainer}>
            <FlatList 
                showsVerticalScrollIndicator = {false}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image}/>
                        <Text>Our Price: {item.price}/-</Text>
                    </View>
                
            )}/>
        </View>
    )
}

export default ProductListing;

const styles = StyleSheet.create({
    productsContainer: {
        backgroundColor: '#f0f1f2',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
    },
    item: {
        height: 150,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
})