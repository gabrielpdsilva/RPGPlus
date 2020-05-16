import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import CustomButton from '../components/CustomButton';

export default class LoginScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Login...</Text>
                <TextInput style={styles.input} placeholder="E-mail..."/>
                <TextInput style={styles.input} placeholder="Password..."/>

                <CustomButton
                    title="GO TO REGISTER!"
                    onPress={() => this.props.navigation.navigate("Register")}
                    style={{}}
                    textStyle={{}}
                />
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