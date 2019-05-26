import React from 'react';
import {StyleSheet, View} from 'react-native';

import ListItem from '../listItem/ListItem';


const placeList = props=>{
    const placeOutput = props.places.map((place, i)=>(
        <ListItem key={i} placeName={place} />
    ));
    return (
        <View style={styles.listContainer}>
            {placeOutput}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
    }
});

export default placeList;