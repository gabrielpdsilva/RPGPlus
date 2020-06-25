import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Text
} from 'react-native';

import styles from '../styles/styles';
import colors from '../styles/colors';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';

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
            alert("Please, fill all the fields.");
            return;
        }

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("RPG+");
                this.setState({email: '', password: ''});
                ToastAndroid.show("Successfully logged!", ToastAndroid.SHORT);
            }).catch(error => alert("error: " + error));   
    }

    render(){

        return(

            <View style={styles.container}>

                <CustomAppBar title="Login" subtitle="" backIsVisible={false}/>

                <View style={styles.childContainer}>

                    <Text style={styles.title}>Welcome!</Text>

                    <Text style={styles.text}>Please, Sign In to continue</Text>

                    <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt})} placeholder="E-mail..." />

                    <TextInput style={styles.textinput} value={this.state.password} onChangeText={ (txt) => this.setState({password: txt})} secureTextEntry={true} placeholder="Password..." />


                    <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")} style={[styles.button, {backgroundColor: colors.alternativeOrange}]}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot Password")}>
                        <Text style={styles.text}>Forgot your password?</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}