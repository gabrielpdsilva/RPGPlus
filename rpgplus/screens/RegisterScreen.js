import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    ToastAndroid,
    Text
} from 'react-native';
import CustomButton from '../components/CustomButton';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

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

        //if at least one field is empty
        if(this.state.name == '' || this.state.nickname == '' || this.state.email == '' || this.state.password == '' || this.state.confirmPassword == ''){
            alert("You have to fill all the fields!");
            return;
        }

        //if password is different from confirmPassord
        if(this.state.password !== this.state.confirmPassword){
            alert("Password and Confirm Password fields cannot be different!");
            return;
        }

        const dbh = firebase.firestore();

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(cred => {

                //set the displayName of the user
                cred.user.updateProfile({displayName: this.state.name});

                //creates a doc of the user, here we can add to the doc whatever we want
                return dbh.collection("users").doc(cred.user.uid).set({

                    nickname: this.state.nickname,

                }).then(() => {

                    //goes to Login screen after create the user
                    this.props.navigation.navigate('Login');
                    
                    //toast a message
                    ToastAndroid.show("Successfully Registered!", ToastAndroid.SHORT);

                }).catch(error => alert("falhastes no then navigate" + error));
            }).catch(error => alert("falhastes no create user with email" + error));
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.childcontainer}>

                    

                    <Text style={styles.text}>Register your account!</Text>

                    <TextInput style={styles.textinput} value={this.state.name} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Type here your name..." />

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
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#232635',
        borderColor: 'black',
        borderWidth: 2,

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
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#2d3042',
        color: 'white'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
      },

    text: {
        color: 'white',
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
    },
});