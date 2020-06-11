import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    ToastAndroid,
    Switch,
    Alert,
    TouchableOpacity
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../styles/styles';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

export default class PreferencesScreen extends Component {
    constructor(props){
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            isSwitchOn: false,
           
        }
    }

    buttonDelete = () => {
        Alert.alert(
            'Delete Account', //title
            'Are you sure you want to delete your account?', //message
            [
                {
                    text: 'Cancel',
                    onPress: () => ToastAndroid.show("Delete canceled.", ToastAndroid.SHORT),
                    style: 'cancel'
                },
                {
                    text: 'OK', onPress: () => {
                    this.deleteAccount();
                    }
                }
            ],
            { cancelable: false }
        );
    }

    deleteAccount = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        dbh.collection("users").doc(user.uid).delete().then(() => {

            //toast a message
            ToastAndroid.show("Document successfully deleted!", ToastAndroid.SHORT);

            user.delete().then(() => {
    
                //toast a message
                ToastAndroid.show("Your account has been deleted!", ToastAndroid.SHORT);
    
                //goes to login screen
                this.props.navigation.navigate("Login");
            })
            .catch((error) => {
                alert("Something went wrong: \n" + error);
            });


        }).catch((error) => {
            alert("Error removing document: " + error);
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

                <CustomAppBar title="My Preferences"/>

                <View style={styles.childContainer}>
                    
                    <Text style={styles.text}>Change your name</Text>

                    <View style={{flexDirection: 'row'}}>

                        <TextInput style={styles.textinput}
                            backgroundColor = {isSwitchOn ? '#232635' : '#14161f'}
                            editable={isSwitchOn}
                            value={this.state.name}
                            width={235}
                            onChangeText={ (txt) => this.setState({name: txt}) }
                            placeholder="..."
                        />

                        <Switch
                            trackColor={{ false: "#767577", true: "#f75605" }}
                            thumbColor="#f4f3f4"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this._onToggleSwitch}
                            value={isSwitchOn}
                        />

                    </View>

                    <TouchableOpacity onPress={this.updateName} style={styles.button}>
                        <Text style={styles.buttonText}>RENAME ACCOUNT</Text>
                    </TouchableOpacity>

                    <Text>────────────────────────</Text>
                    
                    <Text style={styles.dangerTitle}>Danger Zone</Text>
                    
                    <Text style={styles.dangerText}>If you delete your account, you will lose everything about it.</Text>

                    <TouchableOpacity onPress={this.buttonDelete} style={styles.button}>
                        <Text style={styles.buttonText}>DELETE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}