import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View>
                <Text>Home</Text>
                <Button onPress={() => alert("teste")} title="Hue"></Button>
            </View>
        );
    }
}