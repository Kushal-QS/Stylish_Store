import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from '../custom/header';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}>
      <Header customStyles={styles.customHeader}/>
      <View style={styles.container}>
        
        <View style={styles.vectorImg}>
          <Image 
            source={require('../assets/images/cogWheel.jpg')}
            style={styles.pic}
          />
        </View>
        <Text style={styles.note}>Under Maintenance</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customHeader: {
    marginVertical: 5,
  },
  vectorImg: {

  },
  pic: {
    height: 400,
    width: 400,
  },
  note: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'blue',
  }
});

export default SettingsScreen;
