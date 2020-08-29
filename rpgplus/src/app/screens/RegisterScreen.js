import React, { Component } from 'react';
import {
    View,
    TextInput,
    ToastAndroid,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import styles from '../style/styles';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';

import 'firebase/firestore';

import { translate } from '../locales/localeConfig';

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
        
        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarRegister')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <ScrollView style={{marginTop: 8}}>   

                    <Text style={styles.title}>{translate('registerTitle')}</Text>

                    <Text style={styles.text}>{translate('registerSubtitle')}</Text>

                    <View style={styles.inputForm}>

                        <View style={{marginTop: 8}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerName')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 8}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerNickname')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.nickname}
                                onChangeText={(txt) => this.setState({nickname: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 8}}>

                            <Text style={styles.inputTitle}>{translate('registerEmail')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 8}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerPassword')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(txt) => this.setState({password: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View>

                        <View style={{marginTop: 8}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerConfirmPassword')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.confirmPassword}
                                onChangeText={(txt) => this.setState({confirmPassword: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View>

                    </View>

                    <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>

                        <TouchableOpacity onPress={this.handleSignUp} style={styles.button}>
                            <Text style={styles.buttonText}>{translate('registerBtnRegister')}</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>
        )
    }
}