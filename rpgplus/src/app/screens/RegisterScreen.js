import React, { Component } from 'react';
import {
    View,
    TextInput,
    ToastAndroid,
    Text,
    TouchableOpacity,
    ScrollView
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
            pic: '',
        }
    }

    handleSignUp = () => {

        //if at least one field is empty
        if(this.state.name == '' || this.state.nickname == '' || this.state.email == '' || this.state.password == '' || this.state.confirmPassword == ''){
            alert(translate('alertRegisterFillFields'));
            return;
        }

        //if password is different from confirmPassord
        if(this.state.password !== this.state.confirmPassword){
            alert(translate('alertRegisterPassword'));
            return;
        }

        const dbh = firebase.firestore();

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(cred => {

                //set the displayName of the user
                cred.user.updateProfile({
                    displayName: this.state.name
                });

                //creates a doc of the user, here we can add to the doc whatever we want
                return dbh.collection("users").doc(cred.user.uid).set({

                    nickname: this.state.nickname,

                }).then(() => {

                    //goes to Login screen after create the user
                    this.props.navigation.navigate('Login');
                    
                    //toast a message
                    ToastAndroid.show(translate('toastRegisterSuccess'), ToastAndroid.SHORT);

                }).catch(error => console.log("Something went wrong:\n" + error));
            }).catch(error => console.log("Could not create an user:\n" + error));
    }

    render(){
        //<View style={styles.childContainer}>
        return(

            <View style={styles.container}>

                <CustomAppBar title={translate('appBarRegister')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <ScrollView style={{marginTop: 14}}>

                    <Text style={styles.title}>{translate('registerTitle')}</Text>

                    <Text style={styles.text}>{translate('registerSubtitle')}</Text>

                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('registerName')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerNickname')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.nickname}
                                onChangeText={(txt) => this.setState({nickname: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('registerEmail')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>{translate('registerPassword')}</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(txt) => this.setState({password: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
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