import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Text
} from 'react-native';
import CustomButton from '../components/CustomButton';

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

                <Text style={styles.title}>Welcome!</Text>

                <Text style={styles.text}>Please, Sign In to continue</Text>

                <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt})} placeholder="E-mail..." />

                <TextInput style={styles.textinput} value={this.state.password} onChangeText={ (txt) => this.setState({password: txt})} secureTextEntry={true} placeholder="Password..." />

                <CustomButton title="LOGIN" onPress={this.handleLogin}/>

                <CustomButton title="SIGN UP" style={{backgroundColor: '#e62600'}} onPress={() => this.props.navigation.navigate("Register")}/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot Password")}>
                    <Text style={styles.text}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        backgroundColor: '#232635',
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