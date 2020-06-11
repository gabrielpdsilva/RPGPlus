import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import styles from '../styles/styles';

import CustomAppBar from '../components/CustomAppBar';

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

        //sent a request to reset password
        auth.sendPasswordResetEmail(emailAddress).then(() => {
            ToastAndroid.show("Done, please check your e-mail", ToastAndroid.SHORT);
        }).catch((error) => {
            alert("Something went wrong: \n" + error);
        });
    }

    render(){
        return(

            <View style={styles.container}>

                <CustomAppBar title="Forgot Password" subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <View style={styles.childContainer}>

                    <Text style={styles.title}>Forgot your password?</Text>
                    <Text style={styles.text}>Type below your e-mail to recover your password.</Text>
                    <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt})} placeholder="Your e-mail here..." />

                    <TouchableOpacity onPress={this.resetPassword} style={styles.button}>
                        <Text style={styles.buttonText}>RESET PASSWORD</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}