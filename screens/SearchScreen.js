import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBox from '../components/SearchBox';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = () => {

  const navigation = useNavigation();

  onSearch = async (searchText) => {
    try {
      const response = await fetch(`https://omdbapi.com/?apikey=f96cdf02&s=${searchText}&page=10`)
      const json = await response.json()
      navigation.navigate('List', {
        Movies: json
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <SearchBox onSearch={this.onSearch} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 800,
    width: 400,
    resizeMode: 'cover'
  }
})

export default SearchScreen