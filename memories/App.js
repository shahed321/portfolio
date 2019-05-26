/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';

//import ListItem from './src/components/listItem/ListItem';
import PlaceList from './src/components/placeList/PlaceList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component {
  state ={
    placeName: '',
    places:[]
  };
  placeNameChangedHandler=val=>{
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler=()=>{
    if(this.state.placeName.trim() ===""){
      return;
    }
    this.setState(prevState=>{
      return{
        places: prevState.places.concat(prevState.placeName)
      };
    })
  };
  render() {


    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.placeInput}
        placeholder= "Awesome Memories"
        value= {this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
         />
        <Button 
        style={styles.placeButton} 
        title="Add"
        onPress={this.placeSubmitHandler}
         />
         </View>
         <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer:{
    //flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  },
  listContainer:{
    width:"100%"
  }
});
