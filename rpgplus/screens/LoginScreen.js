import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

export default class LoginScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Login...</Text>
                
                <CustomTextInput placeholder="E-mail..."/>
                <CustomTextInput placeholder="Password..."/>

                <CustomButton
                    title="GO TO REGISTER!"
                    onPress={() => this.props.navigation.navigate("Register")}
                    style={{}}
                    textStyle={{}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textArea: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
    },
});