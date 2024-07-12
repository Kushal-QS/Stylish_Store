import React from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../custom/header';
import SearchBar from '../custom/searchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListing from './productListing';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header customStyles={styles.customHeader}/>
      <SearchBar customStyles={styles.customSearchBar}/>
      
        <ProductListing />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  customSearchBar: {
    margin: 10,
  },
  customHeader: {
    marginVertical: 5,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#a0b0c0',
    borderRadius: 5,
    alignItems: 'center',

  },
  product: {
    height: 150,
    width: 150,
    backgroundColor: 'yellow',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  }
});

export default HomeScreen;


