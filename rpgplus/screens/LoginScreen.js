import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import CustomTitle from '../components/CustomTitle';

import * as firebase from 'firebase';

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

                <CustomTitle>Login</CustomTitle>
                <CustomText>Hello there!</CustomText>

                <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt})} placeholder="E-mail..." />

                <TextInput style={styles.textinput} value={this.state.password} onChangeText={ (txt) => this.setState({password: txt})} secureTextEntry={true} placeholder="Password..." />

                <CustomButton
                    title="LOGIN"
                    onPress={this.handleLogin}
                    style={{}}
                    textStyle={{}}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                    <CustomText>New here? Create an account!</CustomText>
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
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#232635',
        color: 'white'
    },
});