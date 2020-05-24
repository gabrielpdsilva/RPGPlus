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

        user
        .delete()
        .then(() => {

            //toast a message
            ToastAndroid.show("Your account has been deleted!", ToastAndroid.SHORT);

            //goes to login screen
            this.props.navigation.navigate("Login");
        })
        .catch((error) => {
            alert("Something went wrong: \n" + error);
        });

    }

    updateName = () => {

        const user = firebase.auth().currentUser;

        //updates de user profile
        user
        .updateProfile({
            
            //updates the displayName of the user
            displayName: this.state.name,
        })
        .then(() => {

            //toast a message
            ToastAndroid.show("Done!", ToastAndroid.SHORT);
        })
        .catch((error) => {
            alert("Something went wrong: \n" + error);
        });

        this.setState({isSwitchOn: false});

    }

    _onToggleSwitch = () =>  this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    render(){

        const { isSwitchOn } = this.state;

        return(
            <View style={styles.container}>

                <Text style={styles.title}>Profile Preferences</Text>
                <Text style={styles.text}>Change your name</Text>

                <View style={{flexDirection: 'row'}}>

                    <TextInput style={styles.textinput} editable={isSwitchOn} value={this.state.name} width={235} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="..."/>

                    <Switch
                        trackColor={{ false: "#767577", true: "#f75605" }}
                        thumbColor={isSwitchOn ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this._onToggleSwitch}
                        value={isSwitchOn}
                    />

                </View>

                <CustomButton title="RENAME ACCOUNT" onPress={this.updateName}/>

                <Text>────────────────────────</Text>
                
                <Text style={styles.dangerTitle}>Danger Zone</Text>
                
                <Text style={styles.dangerText}>If you delete your account, you will lose everything about it.</Text>

                <CustomButton title="DELETE ACCOUNT" onPress={this.deleteAccount}/>
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

    dangerTitle: {
        color: '#f91818',
        fontWeight: 'bold',
        fontSize: 20
    },

    dangerText: {
        color: '#f91818',
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
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