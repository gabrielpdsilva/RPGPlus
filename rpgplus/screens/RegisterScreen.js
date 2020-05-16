import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isValid: false
        }
    }

    registerUser = () => {
        if(this.state.isValid){
            alert("Created!");
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <CustomTitle>Register Screen</CustomTitle>
                <CustomTitle>{this.state.teste}</CustomTitle>
                
                <CustomTextInput placeholder="Type here your username..."/>
                <CustomTextInput placeholder="Type here your e-mail..."/>
                <CustomTextInput placeholder="Type here your password..."/>
                <CustomTextInput placeholder="Confirm your password..."/>
                
                <CustomButton title="REGISTER" onPress={this.registerUser}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },
});