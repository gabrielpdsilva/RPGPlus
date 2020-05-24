import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Switch
} from 'react-native';

import CustomButton from '../components/CustomButton';

import firebase from '../controller/Firebase';

export default class PreferencesScreen extends Component {
    constructor(props){
        
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            isSwitchOn: false,
           
        }
    }

    deleteAccount = () => {

        const user = firebase.auth().currentUser;


        this.props.navigation.navigate("Login");

    }

    _onToggleSwitch = () =>  this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    render(){

        const { isSwitchOn } = this.state;

        return(
            <View style={styles.container}>
                <Switch
                    trackColor={{ false: "#767577", true: "#f75605" }}
                    thumbColor={isSwitchOn ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this._onToggleSwitch}
                    value={isSwitchOn}
                />
                <TextInput style={styles.textinput} editable={isSwitchOn} value={this.state.name} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="..."/>
                <Text style={styles.title}>Danger Zone</Text>
                <Text style={styles.text}>If you delete your account, you will lose everything about it.</Text>
                <CustomButton title="DELETE ACCOUNT" onPress={() => alert("clicou em delete")}/>
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
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        backgroundColor: '#2d3042',
        color: 'white'
    },

    title: {
        color: '#f91818',
        fontWeight: 'bold',
        fontSize: 20
    },

    text: {
    color: '#f91818',
    margin: 5,
    fontSize: 15,
    textAlign: 'center'
    },
});