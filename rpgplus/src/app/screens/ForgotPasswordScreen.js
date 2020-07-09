import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import styles from '../style/styles';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';
import { translate } from '../locales/localeConfig';

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

                <CustomAppBar title={translate('appBarForgot')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <View style={styles.childContainer}>

                    <Text style={styles.title}>{translate('forgotPassword')}</Text>
                    <Text style={styles.text}>{translate('forgotMessage')}</Text>

                    <TextInput
                        style={styles.textInput}
                        value={this.state.email}
                        onChangeText={ (txt) => this.setState({email: txt})}
                        placeholder={translate('forgotInput')}
                    />

                    <TouchableOpacity onPress={this.resetPassword} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('buttonForgotPassword')}</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}