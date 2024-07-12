import React from "react";

import LoginScreen from "../screens/login";
import ForgotPassword from "../screens/forgotPassword";
import SignupScreen from "../screens/signUp";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./bottomTabNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>

    )
}

export default AuthNavigator;