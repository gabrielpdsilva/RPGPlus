import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Text,
    StyleSheet
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';


export default class TestLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render(){

        return(

            <View style={hue.container}>

<CustomAppBar title="Hue" subtitle="" backIsVisible={false} isLoginScreen = {true}/>

                <Text style={hue.greeting}>Oi</Text>

                <View style={hue.form}>

                    <View>
                        <Text style={hue.inputTitle}>E-mail</Text>
                        <TextInput style={hue.input} autoCapitalize="none"/>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={hue.inputTitle}>Password</Text>
                        <TextInput style={hue.input} secureTextEntry autoCapitalize="none"/>
                    </View>

                </View>

                    
                <TouchableOpacity style={hue.button}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 30}}>
                    <Text style={{color: "#414959", fontSize: 13}}>
                        New here? <Text style={{fontWeight: "500", color: "#E9446A"}}>Sign here</Text>
                    </Text>
                </TouchableOpacity>

                
            </View>

        );
    }
}

const hue = StyleSheet.create({

    inputTitle: {
    
        color: 'red',
        fontSize: 10,
        textTransform: "uppercase",
    
    },
    
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: 'black',
    },

    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },

    container: {
        flex: 1,
        backgroundColor: colors.lightTheme,
    },
    

    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    
    button: {
        marginHorizontal: 30,
        backgroundColor: colors.orange,
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    }
});