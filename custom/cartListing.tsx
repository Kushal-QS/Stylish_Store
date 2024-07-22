//cart listing
import React, { useEffect, useState } from 'react';

import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ProductDetails from '../screens/productDetails';

//import { HomeStackParamList } from '../types';
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'ProductDetails'>;

interface Product {
    productId: string;
    quantity: number;
}
  
interface Cart {
    id: number;
    userId: number;
    date: string;
    products: Product[];
    __v: number;
}

interface ProductDetailed {
    category: string;
    description: string;
    id: string;
    image: string;
    price: string;
    rating: RatingProp;
    title: string;
    quantity: number;
}

interface RatingProp {
    count: string;
    rate: string;
}

const CartProductListing: React.FC = ({}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [carts, setCarts] = useState<Cart[]>([]);
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const [cartProductsDetailed, setCartProductsDetailed] = useState<ProductDetailed[]>([])
    //const navigation = useNavigation<NavigationProp>();

    useEffect(()=>{
        getCartProducts();
    }, []);

    useEffect(() => {
        if(cartProducts.length > 0){
            fetchProductDetails();
            console.log("Products with details fetched");
            //console.log(cartProductsDetailed[0].title);
        }
    }, [cartProducts]);

    const getCartProducts =() => {
        const URL = "https://fakestoreapi.com/carts?userId=1";

        fetch(URL)
        .then((res) =>{
            return res.json();
        }).then((data)=>{
            setCarts(data);
            setCartProducts(data[0].products);
            //console.log("cartProducts are...");
            //console.log(cartProducts);
        }).catch((Error) => {
            console.log(Error)
        })
    };

    const fetchProductDetails = async () => {
        const productsWithDetailsArray: ProductDetailed[] = [];
        for(const cartProduct of cartProducts){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${cartProduct.productId}`);
                const productData = await response.json();
                productsWithDetailsArray.push({ ...productData, quantity: cartProduct.quantity });
            }catch(error){
                console.log(error);
            }
        }

        setCartProductsDetailed(productsWithDetailsArray);
        setIsLoading(false);
    };

    const increaseQuantity = (productId: string) => {
        setCartProductsDetailed((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
          ) //here product means ProductDetailed object
        );
    };
      
    const decreaseQuantity = (productId: string) => {
        setCartProductsDetailed((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 } : product
          )
        );
    };

    const deleteProduct = (productId: string) => {
        setCartProductsDetailed((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    };

    const renderProduct = ({ item }: {item: ProductDetailed}) => (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.t1}>{item.category}</Text>
                <Text style={styles.t2}>{item.title}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={styles.quantity}>Quantity : {item.quantity}</Text>
                <View style={styles.quantityButtons}>
                    <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                        <Icon name="minus" size={24} color="#000" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                        <Icon name="plus" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.deleteIcon} onPress={() => deleteProduct(item.id)}>
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
                data={cartProductsDetailed}
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