import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Image
} from 'react-native';

import styles from '../style/styles';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';
import { translate } from '../locales/localeConfig';

import { Hoshi } from 'react-native-textinput-effects';
import colors from '../style/colors';

export default class ForgotPasswordScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }

    handleResetPassword = () => {

        const auth = firebase.auth();
        const emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress)
        .then(() => {
            ToastAndroid.show(translate('toastForgotPasswordDone'), ToastAndroid.SHORT);
        })
        .catch((error) => {
            alert(translate('alertCatchError') + error);
        });
    }

    render(){
        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarForgot')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                    <Image
                        source={require('../../../assets/logo.png')}
                        style={{ width: 200, height: 100, justifyContent: 'center',
                        alignItems: 'center',}}
                    />

                    <Text style={styles.title}>{translate('forgotTitle')}</Text>
                    <Text style={styles.text}>{translate('forgotSubtitle')}</Text>
                    
                    <Hoshi
                        style={styles.hoshiStyle}
                        borderColor={colors.orange}
                        labelStyle={{color: colors.black}}
                        inputStyle={{color: colors.black}}
                        //needs to be the same of the container
                        backgroundColor={colors.white}
                        label={translate('forgotEmail')}
                        borderHeight={3}
                        inputPadding={16}
                        maxLength={50}
                        value={this.state.email}
                        onChangeText={(txt) => this.setState({email: txt})}
                    />
  
                    <TouchableOpacity onPress={this.handleResetPassword} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('forgotBtnPassword')}</Text>
                    </TouchableOpacity>
                    
            </View>
        );
    }
}