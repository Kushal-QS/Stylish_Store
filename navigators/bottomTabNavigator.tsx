import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home";
import WishlistScreen from "../screens/wishlist";
import CartScreen from "../screens/cart";
import SearchScreen from "../screens/search";
import SettingsScreen from "../screens/settings";

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: "#EB3030",
                tabBarInactiveTintColor: "#000000",
                tabBarHideOnKeyboard: true,
            }}
        >

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({color, size}) =>(
                    <Feather name="home" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Wishlist" component={WishlistScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="heart" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="shopping-cart" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="search" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="settings" size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;