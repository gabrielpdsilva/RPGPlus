import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';
import CustomButton from '../components/CustomButton';

import styles from '../styles/styles';

import firebase from '../controller/Firebase';

export default class ForgotPasswordScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    resetPassword = () => {

        const auth = firebase.auth();
        const emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress).then(() => {
            ToastAndroid.show("Done, please check your e-mail", ToastAndroid.SHORT);
        }).catch((error) => {
            alert("Something went wrong: \n" + error);
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Forgot your password?</Text>
                <Text style={styles.text}>Type below your e-mail to recover your password.</Text>
                <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt})} placeholder="Your e-mail here..." />

                <CustomButton
                    title="RESET PASSWORD"
                    onPress={this.resetPassword}
                    style={{}}
                    textStyle={{}}
                />
            </View>
        );
    }
}