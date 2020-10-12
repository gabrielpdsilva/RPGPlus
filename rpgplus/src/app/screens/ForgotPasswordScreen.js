/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    ToastAndroid,
    Image,
    Alert
} from 'react-native';
import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';
import firebase from '../controller/FirebaseConfig';
import { translate } from '../locales/localeConfig';
import { Hoshi } from 'react-native-textinput-effects';
import colors from '../style/colors';
import AwesomeButton from "react-native-really-awesome-button";

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
            switch(error.code) {
                case 'auth/invalid-email':
                    Alert.alert(translate('alertTitleInvalidEmail'),
                                translate('alertInvalidEmail'));
                break;

                case 'auth/user-not-found':
                    Alert.alert(translate('alertTitleUserNotFound'),
                                translate('alertUserNotFound'));
            }
        });
    }

    render(){

        const email = this.state.email;

        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarForgot')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 0}}>

                        <Image
                             source={require('../assets/images/logo.png')}
                            style={{ width: 200, height: 100, justifyContent: 'center',
                            alignItems: 'center',}}
                        />

                    </View>

                    <View style={styles.cardBackground}>

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
                            value={email}
                            onChangeText={(txt) => this.setState({email: txt})}
                        />

                    </View>

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

                        <AwesomeButton
                            backgroundColor={colors.slateBlue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={340}
                            onPress={next => {
                                this.handleResetPassword();
                                next();
                            }}
                        >
                            {translate('forgotBtnPassword')}
                        </AwesomeButton>
                        
                    </View>
            </View>
        );
    }
}