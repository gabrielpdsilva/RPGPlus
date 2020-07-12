import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Text,
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';

import { translate } from '../locales/localeConfig';

/*Useful site about login
*https://medium.com/better-programming/react-native-firebase-authentication-7652e1d2c8a2
*
*/

export default class Test extends Component {

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

                <CustomAppBar title={translate('appBarLogin')} subtitle="" backIsVisible={false} isLoginScreen = {true}/>

                <View style={styles.draftBox}>

                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.title}>Olá</Text>

                            <Text style={styles.inputTitle}>Nome</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>Categoria</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(txt) => this.setState({password: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Sistema</Text>
                            <TextInput
                                style={styles.textInput}
                                value={this.state.email}
                                onChangeText={(txt) => this.setState({email: txt})}
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>Texto</Text>
                            <TextInput
                                multiline = {true}
                                height = {150}
                                textAlignVertical = 'top'
                                style={styles.textInputBox}
                                value={this.state.password}
                                onChangeText={(txt) => this.setState({password: txt})}
                                secureTextEntry={true}
                            />
                            
                        </View> 

                    </View>

                </View>
            </View>
        );
    }
}