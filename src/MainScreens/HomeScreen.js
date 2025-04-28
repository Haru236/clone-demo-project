import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Headerbar from '../Components/Headerbar';
import AntDesign from '@expo/vector-icons/AntDesign';
import Categories from '../Components/Categories';
import OfferSlider from '../Components/OfferSlider';
import CartSlider from '../Components/CartSlider';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
    console.log('Searching for:', text);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#FF3F00'} style="light" />

      <Headerbar />

      <View style={styles.searchbox}>
        <AntDesign name="search1" size={22} color="#FF3F00" />
        <TextInput
          style={styles.input}
          placeholder="Search your cravings..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <Categories />
      <OfferSlider />
      <CartSlider navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fefefe', // soft white
    paddingTop: 10,
  },
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  input: {
    marginLeft: 12,
    fontSize: 16.5,
    color: '#333',
    flex: 1,
    fontWeight: '500',
  },
});
