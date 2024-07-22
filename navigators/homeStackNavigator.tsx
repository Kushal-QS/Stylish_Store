import React from 'react';

import HomeScreen from '../screens/home';
import ProductDetails from '../screens/productDetails';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListing from '../custom/productListing';
import { HomeStackParamList } from '../types';
import Profile from '../screens/profile';

const Home_Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {

    return(
        <Home_Stack.Navigator initialRouteName='Home' >
            <Home_Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }}/>
            <Home_Stack.Screen name="ProductDetails" component={ProductDetails} options={{
                headerShown: false,
            }}/>
            <Home_Stack.Screen name="Profile" component={Profile} />
        </Home_Stack.Navigator>
    )
}

export default HomeStackNavigator;