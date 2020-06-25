import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ToastAndroid,
    Switch,
    Alert,
    TouchableOpacity
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../styles/styles';

import colors from '../styles/colors';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class PreferencesScreen extends Component {
    constructor(props){
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            isSwitchOn: false,
            image: null,
           
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
    
            alert("It works", result);
        } catch (E) {
            alert(E);
        }
      };

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
        let { image } = this.state;

        return(
            <View style={styles.container}>

                <CustomAppBar title="My Preferences"/>

                <View style={styles.childContainer}>
                    
                    <Text style={styles.text}>Change your name</Text>

                    <View style={{flexDirection: 'row'}}>

                        <TextInput style={styles.textinput}
                            backgroundColor = {isSwitchOn ? colors.darkContainer : colors.deepGray}
                            editable={isSwitchOn}
                            value={this.state.name}
                            width={235}
                            onChangeText={ (txt) => this.setState({name: txt}) }
                            placeholder="..."
                        />

                        <Switch
                            trackColor={{ false: colors.lightGray, true: colors.orange }}
                            thumbColor={colors.alternativeWhite}
                            ios_backgroundColor={colors.darkGray}
                            onValueChange={this._onToggleSwitch}
                            value={isSwitchOn}
                        />

                    </View>

                    <TouchableOpacity
                        onPress={this.updateName}
                        disabled = {!isSwitchOn}
                        style={[styles.button, {backgroundColor: isSwitchOn ? colors.orange : colors.DarkestOrange}]}
                    >
                        <Text style={styles.buttonText}>RENAME ACCOUNT</Text>
                    </TouchableOpacity>

                    <Text>────────────────────────</Text>
                    
                    <Text style={styles.dangerTitle}>Danger Zone</Text>
                    
                    <Text style={styles.dangerText}>If you delete your account, you will lose everything about it.</Text>

                    <TouchableOpacity onPress={this.buttonDelete} style={styles.button}>
                        <Text style={styles.buttonText}>DELETE ACCOUNT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>REEEE</Text>
                    </TouchableOpacity>

                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
        );
    }
}