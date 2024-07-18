import React from 'react';

import HomeScreen from '../screens/home';
import ProductDetails from '../screens/productDetails';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListing from '../custom/productListing';
import { HomeStackParamList } from '../types';

const Home_Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {

    return(
        <Home_Stack.Navigator initialRouteName='Home' >
            <Home_Stack.Screen name="Home" component={HomeScreen} />
            <Home_Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Home_Stack.Navigator>
    )
}

export default HomeStackNavigator;