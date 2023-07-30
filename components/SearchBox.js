import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, ImageBackground } from 'react-native';
import React from 'react';
import {  } from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default class SearchBox extends React.Component {
  state = {
   search: ''
  }

  validateform = ()=> {
    if (this.state.search.length > 0)
    {
      return true
    }
    else{
      return false
    }
  }

  handlesearch = search => {
    this.setState({search})
  }
  

render(){
  return (
    <View style={styles.container}> 
      <TextInput 
      value={this.state.search} 
      style={styles.input}
      onChangeText={this.handlesearch}/>
      <Button title='search' onPress={()=>this.props.onSearch(this.state.search)} disabled={!this.validateform()}/>
      <StatusBar style="auto" />
    </View>
   
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    height: 500,
    width: 400,
    resizeMode: 'cover'
  }

});
