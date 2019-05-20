import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state ={
    placeName : ""
  };

  placeNameChangedHandler = val =>{
    this.setState({
      placeName: val
    })
  };
  render() {


    return (
      <View style={styles.container}>
        <TextInput 
        style={{width: 300, borderColor: "black", borderWidth: 2}}
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
