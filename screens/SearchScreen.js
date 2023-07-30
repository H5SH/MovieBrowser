import 'react-native-gesture-handler';
import React from 'react';
import {  } from 'react-native';
import SearchBox from '../components/SearchBox';
import { useNavigation } from '@react-navigation/native';
import getMovie from '../api/api';


const SearchScreen = ()=> {

  const navigation = useNavigation();

  onSearch = async (searchText)=> {
    try{
      const response = await fetch(`https://omdbapi.com/?apikey=f96cdf02&s=${searchText}&page=10`)
      const json = await response.json()
      navigation.navigate('List', {
        Movies: json
      })
    } catch(err) {
      console.log(err)
    } 
  }

  return (
      <SearchBox onSearch={this.onSearch}/>
  )

}

export default SearchScreen