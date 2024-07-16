import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../custom/header';
import SearchBar from '../custom/searchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListing from './productListing';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header customStyles={styles.customHeader}/>
      <SearchBar 
        customStyles={styles.customSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <ProductListing searchQuery={searchQuery}/>
      
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

export default HomeScreen;


