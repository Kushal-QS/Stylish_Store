import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../custom/header';
import SearchBar from '../custom/searchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductListing from '../custom/productListing';
import AdvCard from '../custom/card';
import DealBar from '../custom/dealBars';
import SpecialCard from '../custom/specialCard';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header customStyles={styles.customHeader} />
      <SearchBar 
        customStyles={styles.customSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.ads, styles.debug]}>
          <AdvCard 
            imgSrc='card1'
            offer='50-60% Off'
            info1='Now in(product)'
            info2='All colours'
            button='Shop Now'
          />
        </View>
        <DealBar 
          title='Deal of the Day'
          info='Offer closes at 11:59 PM tonight'
          button='Explore'
          customStyle={styles.customDeals1}
        />
        
        <ProductListing searchQuery={"Men's"} />
        
        <View style={[styles.ads, styles.debug]}>
          <AdvCard 
            imgSrc='card2'
            offer='New Arrivals'
            info1='Gift vouchers worth 500/-'
            info2='Ends soon'
            button='Buy Now'
          />
        </View>

        <DealBar 
          title='Most Bought in India'
          info='Free delivery available'
          button='Discover'
          customStyle={styles.customDeals2}
        />

        <ProductListing searchQuery={"jewelery"} />

        <SpecialCard 
          title={'Special Offers'} 
          info={'We make sure you get the offer you need at best rices'} 
          customStyle={styles.customSpecialCard}
        />

        <ProductListing searchQuery={"Electronics"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  ads: {
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
  },
  customSearchBar: {
    margin: 10,
  },
  customHeader: {
    marginVertical: 5,
  },
  customDeals1: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#1A99FF',
  },
  customDeals2: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#FA618C',
  },
  customSpecialCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginTop: 10,
  },
  debug: {
    //borderWidth: 1,
    //borderColor: 'red',
  },
});

export default HomeScreen;
