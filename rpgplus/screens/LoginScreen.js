import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class LoginScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Login...</Text>
                <TextInput style={styles.input} placeholder="E-mail..."/>
                <TextInput style={styles.input} placeholder="Password..."/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                    <Text> Go to Register </Text>
                </TouchableOpacity>
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
    },
});