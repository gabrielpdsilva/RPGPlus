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

import { Avatar } from 'react-native-paper';

//useful content about Storage:
//https://stackoverflow.com/questions/48108791/convert-image-path-to-blob-react-native
//https://www.youtube.com/watch?v=KkZckepfm2Q&feature=youtu.be

export default class PreferencesScreen extends Component {
    constructor(props) {
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
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
                aspect: [4, 4],
                quality: 1,
            });
            
            //if user didnt cancel the action
            if (!result.cancelled) {
                this.uploadImage(result.uri, "profile-picture")
                    .then(() => {
                        ToastAndroid.show("Image added.", ToastAndroid.SHORT);
                        this.getUserPhoto();                        
                    }).catch((error)=> { alert(error) });
            } 

        } catch (E) {
            alert("Oops, error when picking image:\n" + E);
        }
    };

    getUserPhoto = () => {
        const user = firebase.auth().currentUser;
        let imageRef = firebase.storage().ref('users/' + user.uid + '/profile-picture');
        imageRef
            .getDownloadURL()
            .then((url) => {
                user.updateProfile({photoURL: url}); //updating photoURL of the user
                ToastAndroid.show("Image saved.", ToastAndroid.SHORT);
                this.setState({image: url});
            })
            .catch((e) => alert('getting downloadURL of image error => '+ e));

    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const userUID = firebase.auth().currentUser.uid;
        let ref = firebase.storage().ref().child('users/'+ userUID +"/"+ imageName);
        return ref.put(blob);
    }

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

    render(){

        const image = this.state.image;

        return(
            <View style={styles.container}>

                <CustomAppBar title={translate('appBarPreferences')} navigation={this.props.navigation}/>

                <View style={styles.childContainer}>

                    <TouchableOpacity onPress={this._pickImage}>
                        <Avatar.Image
                            source={{
                                uri: image ? image : 'https://simpleicon.com/wp-content/uploads/user1.png'
                            }}
                            size={120}
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