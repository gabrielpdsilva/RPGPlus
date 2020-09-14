import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    ToastAndroid,
    Alert,
    TouchableOpacity,
    Switch
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';

import colors from '../style/colors';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {translate} from '../locales/localeConfig';

import { Avatar } from 'react-native-paper';

import AwesomeButton from "react-native-really-awesome-button";
import DialogInput from 'react-native-dialog-input';

//useful content about Storage:
//https://stackoverflow.com/questions/48108791/convert-image-path-to-blob-react-native
//https://www.youtube.com/watch?v=KkZckepfm2Q&feature=youtu.be

export default class PreferencesScreen extends Component {
    constructor(props) {
        super(props);

        const user = firebase.auth().currentUser;

        this.state = {
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            isSwitchOn: false,
            isDialogVisible: false
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    showDialog = (value) => {
        this.setState({isDialogVisible: value});
    }

    sendInput = (inputText) => {
        this.setState({name: inputText});
        this.showDialog(false);
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') alert('Sorry, we need camera roll permissions to make this work!');
        }
    };
    
    handlePickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });
            
            if (!result.cancelled) {
                this.uploadPhotoToStorage(result.uri, "profile-picture")
                    .then(() => {
                        console.log(translate('toastPreferencesImageAdded'));
                        this.getUserPhotoFromStorage();                        
                    }).catch((error)=> { alert(error) });
            } 

        } catch (e) {
            alert(translate('alertCatchError') + e);
        }
    };

    getUserPhotoFromStorage = () => {
        const user = firebase.auth().currentUser;
        let imageRef = firebase.storage().ref('users/' + user.uid + '/profile-picture');
        
        imageRef.getDownloadURL()
        .then((url) => {
            user.updateProfile({photoURL: url});
            ToastAndroid.show("Image saved.", ToastAndroid.SHORT);
            this.setState({image: url});
        })
        .catch((e) => alert('getting downloadURL of image error => '+ e));

    }

    uploadPhotoToStorage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const userUID = firebase.auth().currentUser.uid;
        let ref = firebase.storage().ref().child('users/'+ userUID +"/"+ imageName);
        return ref.put(blob);
    }

    handleDeleteAccount = () => {
        Alert.alert(
            translate('alertPreferencesTitle'), //title
            translate('alertPreferencesMessage'), //message
            [
                {
                    text: translate('alertCancel'),
                    onPress: () => ToastAndroid.show(translate('toastPreferencesDeleteCancel'), ToastAndroid.SHORT),
                    style: 'cancel'
                },
                {
                    text: translate('alertConfirm'),
                    onPress: () => this.deleteUserFromFirestore()
                }
            ],
            { cancelable: false }
        );
    }

    deleteUserFromFirestore = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        dbh.collection("users").doc(user.uid).delete()
        .then(() => {
            this.deleteAccount(user);
        }).catch((error) => {
            console.log(translate('alertCatchError') + error);
        });

    }

    deleteAccount = (user) => {
        user.delete()
        .then(() => {
            ToastAndroid.show(translate('toastPreferencesUserDeleted'), ToastAndroid.SHORT);
        })
        .catch((error) => {
            console.log(translate('alertCatchError') + error);
        });
    }

    updateUserName = () => {

        const user = firebase.auth().currentUser;
        const name = this.state.name;

        user.updateProfile({displayName: name})
        .then(() => {
            console.log("Name updated.");
        }).catch((error) => {
            console.log(translate('alertCatchError') + error);
        });

    }

    updateUserEmail = () => {

        const user = firebase.auth().currentUser;

        user.updateEmail(this.state.email).then(() => {
            console.log("E-mail updated.");
        }).catch((error) => {
            console.log(translate('alertCatchError') + error);
        });    
    }

    handleSaveChanges = () => {

        this.updateUserName();
        this.updateUserEmail();
        
        this.setState({isSwitchOn: false});
        ToastAndroid.show(translate('toastPreferencesUpdateDone'), ToastAndroid.SHORT);
        this.props.navigation.navigate("Home");
    }

    _onToggleSwitch = () =>  this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    render(){

        const { isSwitchOn } = this.state;
        const image = this.state.image;
        const name = this.state.name;
        const isDialogVisible = this.state.isDialogVisible;

        return(
            <View style={styles.container}>

                <CustomAppBar title={translate('appBarPreferences')} navigation={this.props.navigation}/>

                <View style={{marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>

                    <Text style={styles.title}>{translate('preferencesEditableProfile')}</Text>

                    <Switch
                        trackColor={{ false: colors.darkGray, true: colors.orange }}
                        thumbColor={colors.lightGray}
                        ios_backgroundColor={colors.darkGray}
                        onValueChange={this._onToggleSwitch}
                        value={isSwitchOn}
                    />

                </View>

                <View style={styles.childContainer}>

                    <TouchableOpacity onPress={this.handlePickImage}>
                        <Avatar.Image
                            source={{
                                uri: image !== null ? image : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                            }}
                            size={120}
                        />
                    </TouchableOpacity>

                    <Text style={styles.inputTitle}>{translate('preferencesChangeImage')}</Text>

                    <View style={{marginTop: 8}}>

                        <Text style={styles.inputTitle}>{translate('preferencesName')}</Text>
                        
                        <TextInput
                            style={isSwitchOn ? styles.textInput: styles.disabledTextInput}
                            value={this.state.name}
                            editable={isSwitchOn}
                            onChangeText={ (txt) => this.setState({name: txt}) }
                            placeholder="..."
                        />

                    </View>

                    <View style={{marginTop: 8}}>

                        <Text style={styles.inputTitle}>{translate('preferencesEmail')}</Text>
                        
                        <TextInput
                            style={isSwitchOn ? styles.textInput: styles.disabledTextInput}
                            value={this.state.email}
                            editable={isSwitchOn}
                            onChangeText={ (txt) => this.setState({email: txt}) }
                            placeholder="..."
                        />
                            
                    </View>
                    
                    <View style={{marginTop: 20}}>

                        <TouchableOpacity onPress={this.handleSaveChanges} style={styles.button}>
                            <Text style={styles.buttonText}>{translate('preferencesBtnSaveChanges')}</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={{backgroundColor: 'red'}} onPress={()=>this.setState({isDialogVisible: true})}>
                        <Text>Teste</Text>
                    </TouchableOpacity>

                    <DialogInput isDialogVisible={isDialogVisible}
                        title={"Alterar Nome"}
                        message={"Digite abaixo o novo nome..."}
                        hintInput ={name}
                        
                        submitInput={ (inputText) => {this.sendInput(inputText)} }
                        closeDialog={ () => {this.showDialog(false)}}
                        cancelText="Cancelar"
                        submitText="Confirmar"
                        >
                            
                    </DialogInput>

                    <TouchableOpacity onPress={this.handleDeleteAccount} style={styles.buttonAlternative}>
                        <Text style={styles.buttonText}>{translate('preferencesBtnDeleteAccount')}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}