import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ToastAndroid,
    Alert,
    TouchableOpacity
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {translate} from '../locales/localeConfig';

export default class PreferencesScreen extends Component {
    constructor(props) {
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            isSwitchOn: false,
            image: user.photoURL,
            email: user.email,
            password: user.password,
            isDialogVisible: true,
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') alert('Sorry, we need camera roll permissions to make this work!');
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
            
            //if user didnt cancel the action
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            const user = firebase.auth().currentUser;

            user.updateProfile({
                photoURL: this.state.image
            }).then(() => {
                //...
            }).catch((error) => {
                alert("Something went wrong:\n"+ error);
            });

        } catch (E) {
            alert("Oops, error when picking image:\n" + E);
        }
    };

    buttonDelete = () => {
        Alert.alert(
            'Delete Account', //title
            'Are you sure you want to delete your account? This can\'t be undone.', //message
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

    updateUserProfile = () => {

        const user = firebase.auth().currentUser;

        //updating name
        user.updateProfile({
            //updates the displayName of the user
            displayName: this.state.name,
        }).then(() => {
            console.log("Name updated.");
        }).catch((error) => {
            alert("Something went wrong: \n" + error);
        });

        //updating email
        user.updateEmail(this.state.email).then(() => {
            // Update successful.
            console.log("E-mail updated.");
        }).catch((error) => {
            // An error happened.
            alert("Something went wrong: \n" + error);
        });

        ToastAndroid.show("Done!", ToastAndroid.SHORT);
        this.props.navigation.navigate("Home");
    }

    _onToggleSwitch = () =>  this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    render(){

        const image = this.state.image;

        return(
            <View style={styles.container}>

                <CustomAppBar title={translate('appBarPreferences')} navigation={this.props.navigation}/>

                <View style={styles.childContainer}>

                    <TouchableOpacity onPress={this._pickImage}>
                        <Image
                            source={{
                                uri: image ? image : 'https://simpleicon.com/wp-content/uploads/user1.png'
                            }}
                            style={{ width: 120, height: 120 }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.inputTitle}>{translate('preferencesChangeImage')}</Text>

                    <View style = {styles.lineStyle}/>

                    <View style={{marginTop: 5}}>

                        <Text style={styles.inputTitle}>{translate('preferencesName')}</Text>
                        
                        <TextInput
                            style={styles.textInputPreference}
                            value={this.state.name}
                            onChangeText={ (txt) => this.setState({name: txt}) }
                            placeholder="..."
                        />

                    </View>

                    <View style = {styles.lineStyle}/>

                    <View style={{marginTop: 5}}>

                        <Text style={styles.inputTitle}>{translate('preferencesEmail')}</Text>
                        
                        <TextInput
                            style={styles.textInputPreference}
                            value={this.state.email}
                            onChangeText={ (txt) => this.setState({email: txt}) }
                            placeholder="..."
                        />
                            
                    </View>

                    <View style = {styles.lineStyle}/>
                    
                    <View style={{marginTop: 20}}>

                        <TouchableOpacity onPress={this.updateUserProfile} style={styles.button}>
                            <Text style={styles.buttonText}>{translate('preferencesBtnSaveChanges')}</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity onPress={this.buttonDelete} style={styles.button}>
                        <Text style={styles.buttonText}>{translate('preferencesBtnDeleteAccount')}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}