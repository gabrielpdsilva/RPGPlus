import React, { Component } from 'react';
import {
    View,
    ToastAndroid,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import styles from '../style/styles';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';

import 'firebase/firestore';

import { translate } from '../locales/localeConfig';

import { Hoshi } from 'react-native-textinput-effects';

import colors from '../style/colors';

import AwesomeButton from "react-native-really-awesome-button";

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSignUp = () => {

        const name = this.state.name;
        const nickname = this.state.nickname;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        
        if(name == '' ||nickname == '' || email == '' || password == '' || confirmPassword == ''){
            alert(translate('alertRegisterFillFields'));
            return;
        }

        if(password !== confirmPassword){
            alert(translate('alertRegisterPassword'));
            return;
        }

        const dbh = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            cred.user.updateProfile({displayName: name});
            this.addUserToFirestore(dbh, cred);
        })
        .catch(error => console.log("Could not create an user:\n" + error));
    }

    addUserToFirestore = (dbh, cred) => {
        dbh.collection("users").doc(cred.user.uid).set({nickname: this.state.nickname})
        .then(() =>ToastAndroid.show(translate('toastRegisterSuccess'), ToastAndroid.SHORT))
        .catch(error => console.log("Something went wrong:\n" + error));
    }

    render(){

        const name = this.state.name;
        const nickname = this.state.nickname;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        
        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarRegister')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <ScrollView style={{marginTop: 8}}>   

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10}}>

                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{ width: 200, height: 100, justifyContent: 'center',
                            alignItems: 'center',}}
                        />

                    </View>

                    <Text style={styles.title}>{translate('registerTitle')}</Text>

                    <Text style={styles.text}>{translate('registerSubtitle')}</Text>

                    <Hoshi
                        style={styles.hoshiStyle}
                        borderColor={colors.orange}
                        labelStyle={{color: colors.black}}
                        inputStyle={{color: colors.black}}
                        backgroundColor={colors.lightTheme}
                        label={translate('registerName')}
                        borderHeight={3}
                        inputPadding={16}
                        maxLength={50}
                        value={name}
                        onChangeText={(txt) => this.setState({name: txt})}
                    />

                    <Hoshi
                        style={styles.hoshiStyle}
                        borderColor={colors.orange}
                        labelStyle={{color: colors.black}}
                        inputStyle={{color: colors.black}}
                        backgroundColor={colors.lightTheme}
                        label={translate('registerNickname')}
                        borderHeight={3}
                        inputPadding={16}
                        maxLength={50}
                        value={nickname}
                        onChangeText={(txt) => this.setState({nickname: txt})}
                    />

                    <Hoshi
                        style={styles.hoshiStyle}
                        borderColor={colors.orange}
                        labelStyle={{color: colors.black}}
                        inputStyle={{color: colors.black}}
                        backgroundColor={colors.lightTheme}
                        label={translate('registerEmail')}
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
                        backgroundColor={colors.lightTheme}
                        label={translate('registerPassword')}
                        borderHeight={3}
                        inputPadding={16}
                        maxLength={50}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(txt) => this.setState({password: txt})}
                    />

                    <Hoshi
                        style={styles.hoshiStyle}
                        borderColor={colors.orange}
                        labelStyle={{color: colors.black}}
                        inputStyle={{color: colors.black}}
                        backgroundColor={colors.lightTheme}
                        label={translate('registerConfirmPassword')}
                        borderHeight={3}
                        inputPadding={16}
                        maxLength={50}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(txt) => this.setState({confirmPassword: txt})}
                    />

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

                        <AwesomeButton
                            backgroundColor={colors.blue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={100}
                            onPress={next => {
                                /** Do Something **/
                                this.handleSignUp();
                                next();
                            }}
                        >
                            {translate('registerBtnRegister')}
                        </AwesomeButton>

                    </View>

                </ScrollView>
            </View>
        )
    }
}