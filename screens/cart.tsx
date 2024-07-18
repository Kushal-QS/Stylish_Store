import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CartProductListing from '../custom/cartListing';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../custom/header';
//import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

const CartScreen = () => {
  return (
    <SafeAreaView>
      <Header customStyles={styles.customHeader}/>
      <View style={styles.cartContainer}>
        {/* <Text style={styles.text}>Your Cart</Text> */}
        <CartProductListing />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customHeader: {
    marginVertical: 5,
  },
  cartContainer: {
    flexDirection: 'column',
    backgroundColor: '#f0f1f2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 120,
},
  text: {
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    fontSize: 32,
    textAlign: 'center'
  },
});

export default CartScreen;
