import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Text,
    Image
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';

import { translate } from '../locales/localeConfig';

import { Hoshi } from 'react-native-textinput-effects';

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
            alert(translate('alertLoginFillFields'));
            return;
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({email: '', password: ''});
                ToastAndroid.show(translate('toastLoginSuccess'), ToastAndroid.SHORT);
            }).catch(error => alert(translate('alertCatchError') + error));   
    }

    render(){

        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarLogin')} subtitle="" backIsVisible={false} isLoginScreen = {true}/>

                <ScrollView>

                    <Image
                        source={require('../../../assets/logo.png')}
                        style={{ width: 200, height: 100, justifyContent: 'center',
                        alignItems: 'center',}}
                    />
            
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
                        value={this.state.email}
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
                        value={this.state.password}
                        onChangeText={(txt) => this.setState({password: txt})}
                    />
                    
                    <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('loginBtnLogin')}</Text>
                    </TouchableOpacity>

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