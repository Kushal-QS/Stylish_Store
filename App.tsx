import React, { useState, useEffect } from "react";

import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigators/authNavigator";

import { store } from './src/store/store'
import { Provider } from 'react-redux'

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
