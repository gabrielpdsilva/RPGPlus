import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import CustomTitle from '../components/CustomTitle';

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    userLoggedIn = () => {

        if(this.state.email == '123' && this.state.password == "123"){
            alert("User logged in!")
            this.props.navigation.navigate("RPG+");
            
        }else{
            this.setState({email: '', password: ''});
            alert("Error");
        }
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
                    onPress={this.userLoggedIn}
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