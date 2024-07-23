import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../custom/header';
import SearchBar from '../custom/searchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchPageProductListing from '../custom/searchPageProductListing';
import productSearchStore from '../src/store/productSearch';

const SearchScreen: React.FC = () => {
  useEffect(() => {
    productSearchStore.fetchProducts();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header customStyles={styles.customHeader}/>
      <SearchBar 
        customStyles={styles.customSearchBar}
        setGlobalSearchQuery={productSearchStore.setSearchQuery.bind(productSearchStore)}  
      />
      
      <SearchPageProductListing />
      
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
});

export default SearchScreen;