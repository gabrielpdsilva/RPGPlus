import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class RegisterScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Register...</Text>
                <TextInput style={styles.input} placeholder="E-mail..."/>
                <TextInput style={styles.input} placeholder="Password..."/>
                <TouchableOpacity style={styles.container} onPress={() => alert("hue")}></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        backgroundColor: 'red',
    }
});