import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';
import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleCreateUser = () => {

        const dbh = firebase.firestore();

        dbh.collection("users").doc(this.state.nickname).set({

            nickname: this.state.nickname,
            email: this.state.email,
            
        }).then(() => {
            ToastAndroid.show("User created!", ToastAndroid.SHORT);
        }).catch((error) => {
            alert("Could not add the doc, error:\n" + error);
        });
    }

    handleSignUp = () => {

        if(this.state.password !== this.state.confirmPassword){

            alert("Password and Confirm Password fields cannot be different!");
            return;

        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.handleCreateUser();                                            //creates a doc user to the 'users'  collection
                this.props.navigation.navigate('Login');                            //goes to Login screen after create the user
                ToastAndroid.show("Successfully Registered!", ToastAndroid.SHORT);
            }).catch(error => alert("falhastes, klein" + error));
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.childcontainer}>
                    <CustomTitle>Register</CustomTitle>

                    <CustomText>Register your account!</CustomText>
                    
                    <TextInput style={styles.textinput} value={this.state.nickname} onChangeText={ (txt) => this.setState({nickname: txt}) } placeholder="Type here your nickname..." />

                    <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt}) } placeholder="Type here your e-mail..." />

                    <TextInput style={styles.textinput} value={this.state.password} onChangeText={ (txt) => this.setState({password: txt}) } secureTextEntry={true} placeholder="Type your password..." />
            
                    <TextInput style={styles.textinput} value={this.state.confirmPassword} onChangeText={ (txt) => this.setState({confirmPassword: txt}) } secureTextEntry={true} placeholder="Confirm your password..." />
                
                    <CustomButton title="REGISTER" onPress={this.handleSignUp}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    childcontainer: {
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#232635',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },
    textinput: {
        width: 280,
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#2d3042',
        color: 'white'
    },
});