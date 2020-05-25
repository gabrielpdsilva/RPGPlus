import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class SketchScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Roll Dices screen</Text>
                <Text style={styles.text}>...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    text: {
    color: 'white',
    margin: 5,
    fontSize: 15,
    textAlign: 'center'
    },
});