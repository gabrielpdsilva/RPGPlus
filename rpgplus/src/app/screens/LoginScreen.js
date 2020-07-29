import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Text,
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';

import { translate } from '../locales/localeConfig';

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

        //if email or password is empty
        if(email == '' || password == ''){
            alert(translate('alertLoginFillFields'));
            return;
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("RPG+");
                this.setState({email: '', password: ''});
                ToastAndroid.show(translate('toastLoginSuccess'), ToastAndroid.SHORT);
            }).catch(error => alert(translate('alertCatchError') + error));   
    }

    render(){

        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarLogin')} subtitle="" backIsVisible={false} isLoginScreen = {true}/>

                <View style={styles.childContainer}>
                
                    <Text style={styles.title}>{translate('loginTitle')}</Text>

                    <Text style={styles.text}>{translate('loginSubtitle')}</Text>
                    
                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('loginEmail')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>{translate('loginPassword')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(txt) => this.setState({password: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View> 

                    </View>
                    
                    <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('loginBtnLogin')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                        <Text style={styles.text}>
                        {translate('loginBtnFirstTimeHere')} <Text style={{fontWeight: "500", color: colors.purple, fontWeight: 'bold'}}>{translate('loginBtnRegister')}</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot Password")}>
                        <Text style={styles.text}>{translate('loginBtnForgotPassword')}</Text>
                    </TouchableOpacity>                    

                </View>
            </View>
        );
    }
}