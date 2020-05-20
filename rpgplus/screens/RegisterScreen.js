import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import CustomTitle from '../components/CustomTitle';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
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

                <CustomText>...</CustomText>
                
                <TextInput style={styles.textinput} value={this.state.name} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Type here your nickname..." />

                <TextInput style={styles.textinput} value={this.state.email} onChangeText={ (txt) => this.setState({email: txt}) } placeholder="Type here your e-mail..." />

                <TextInput style={styles.textinput} value={this.state.password} onChangeText={ (txt) => this.setState({password: txt}) } placeholder="Confirm your password..." />
                
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
    textinput: {
        width: 280,
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
    },
});