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

import firebase from '../controller/FirebaseConfig';
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

                    <Text style={styles.title}>{translate('forgotTitle')}</Text>
                    <Text style={styles.text}>{translate('forgotSubtitle')}</Text>

                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('forgotEmail')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>
                        
                    </View>

                    <TouchableOpacity onPress={this.resetPassword} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('forgotBtnPassword')}</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}