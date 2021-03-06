/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Text,
    Image,
    Alert
} from 'react-native';
import styles from '../style/styles';
import colors from '../style/colors';
import CustomAppBar from '../components/CustomAppBar';
import firebase from '../controller/FirebaseConfig';
import { translate } from '../locales/localeConfig';
import { Hoshi } from 'react-native-textinput-effects';
import AwesomeButton from "react-native-really-awesome-button";

/*Useful site about login
*https://medium.com/better-programming/react-native-firebase-authentication-7652e1d2c8a2
*
*/

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = () => {
        const {email, password} = this.state;

        if(email == '' || password == ''){
            Alert.alert(translate('alertTitleLoginFillFields'),
                        translate('alertLoginFillFields'));
            return;
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({email: '', password: ''});
                ToastAndroid.show(translate('toastLoginSuccess'), ToastAndroid.SHORT);
            }).catch(error => {  
                    switch(error.code) {
                        case 'auth/invalid-email':
                            Alert.alert(translate('alertTitleInvalidEmail'),
                                        translate('alertInvalidEmail'));
                        break;

                        case 'auth/user-not-found':
                            Alert.alert(translate('alertTitleUserNotFound'),
                                        translate('alertUserNotFound'));
                        break;
            }});
    }

    render(){

        const email = this.state.email;
        const password = this.state.password;

        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarLogin')} subtitle="" backIsVisible={false} isLoginScreen = {true}/>

                <ScrollView>

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10}}>

                        <Image
                            source={require('../assets/images/logo.png')}
                            style={{ width: 200, height: 100, justifyContent: 'center',
                            alignItems: 'center',}}
                        />

                    </View>
                    
                    <View style={styles.cardBackground}>

                        <Text style={styles.title}>{translate('loginTitle')}</Text>

                        <Text style={styles.text}>{translate('loginSubtitle')}</Text>

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('loginEmail')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={email}
                            onChangeText={(txt) => this.setState({email: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('loginPassword')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(txt) => this.setState({password: txt})}
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
                                /** Do Something **/
                                this.handleLogin();
                                next();
                            }}
                        >
                            {translate('loginBtnLogin')}
                        </AwesomeButton>

                    </View>                  

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                        <Text style={styles.text}>
                        {translate('loginBtnFirstTimeHere')} <Text style={{fontWeight: "500", color: colors.purple}}>{translate('loginBtnRegister')}</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot Password")}>
                        <Text style={styles.text}>{translate('loginBtnForgotPassword')}</Text>
                    </TouchableOpacity> 

                    </ScrollView>

            </View>
        );
    }
}