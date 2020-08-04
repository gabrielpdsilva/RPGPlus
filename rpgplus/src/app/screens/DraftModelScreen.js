import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Alert,
    ScrollView,
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';
import colors from '../style/colors';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';

export default class DraftModelScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            system: '',
            text: '',
            id: '',
        }
    }

    btnEditDraft = () => {

        const draftId = this.state.id;

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();

        //gets the current draft
        let docRef = dbh.collection("users").doc(user.uid).collection("sketchs").doc(draftId);

        //update data
        docRef.update({
            name: this.state.name,
            category: this.state.category,
            system: this.state.system,
            text: this.state.text,
        });

        //toast a message
        ToastAndroid.show(translate('toastDraftModelUpdated'), ToastAndroid.SHORT);
    }

    deleteDraft = () => {

        const draftId = this.state.id;

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();
 
        //delete the doc
        dbh
            .collection("users")
            .doc(user.uid)
            .collection("sketchs")
            .doc(draftId)
            .delete()
            .then(() => ToastAndroid.show(translate('toastDraftModelDeleted'), ToastAndroid.SHORT))
            .catch((error) => alert(translate('alertCatchError: ') + error));

        //goes to home screen
        this.props.navigation.navigate("Home");

    }

    btnDeleteDraft = () => {

        Alert.alert(
            translate('alertDraftModelTitle'), //title
            translate('alertDraftModelMessage'), //message
            [
                {
                    text: translate('alertCancel'),
                    onPress: () => ToastAndroid.show(translate('toastDraftModelCanceled'), ToastAndroid.SHORT),
                    style: 'cancel'
                },
                {
                    text: translate('alertConfirm'), onPress: () => {
                        this.deleteDraft();
                    }
                }
            ],
            { cancelable: false }
        );
    }

    //function that will execute before render method
    UNSAFE_componentWillMount = () => {
        //this.getChosenDraft(); 
    }

    componentDidMount = () => {
        this.getChosenDraft();
    }

    getChosenDraft = () => {
        
        const user = firebase.auth().currentUser;

        const dbh = firebase.firestore();

        //gets the ID of the document that the user has chosen
        let itemId = this.props.route.params.itemId;

        let draftRef = dbh.collection("users").doc(user.uid).collection("sketchs").doc(itemId);

        draftRef.get().then(doc => {
            if (!doc.exists) {
                alert(translate('alertDraftModelNoExist'));
            } else {
                this.setState({
                    id: doc.id,
                    name: doc.data().name,
                    category: doc.data().category,
                    system: doc.data().system,
                    text: doc.data().text,
                });
            }
        })
        .catch(err => {
            alert("Error:\n" + err);
        });
    }

    //called when there is an update, so when user selects
    //another draft, data of the new draft will appear
    componentDidUpdate = () => {
        this.getChosenDraft();
    }

    render(){

        return(
            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarDraftModel')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <ScrollView style={{marginTop: 14}}>
                
                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('editDraftName')}</Text>
                            <TextInput
                                placeholder={translate('editDraftLoading')}
                                placeholderTextColor={colors.darkGray}
                                style={styles.createDraftInput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                            />

                        </View>

                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>{translate('editDraftCategory')}</Text>
                            <TextInput
                                placeholder={translate('editDraftLoading')}
                                placeholderTextColor={colors.darkGray}
                                style={styles.createDraftInput}
                                value={this.state.category}
                                onChangeText={(txt) => this.setState({category: txt})}
                            />
                                
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>{translate('editDraftSystem')}</Text>
                            <TextInput
                                placeholder={translate('editDraftLoading')}
                                placeholderTextColor={colors.darkGray}
                                style={styles.createDraftInput}
                                value={this.state.system}
                                onChangeText={(txt) => this.setState({system: txt})}
                            />

                        </View>

                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>{translate('editDraftText')}</Text>
                            <TextInput
                                placeholder={translate('editDraftLoading')}
                                placeholderTextColor={colors.darkGray}
                                multiline = {true}
                                height = {150}
                                textAlignVertical = 'top'
                                style={styles.createDraftInputBox}
                                value={this.state.text}
                                onChangeText={(txt) => this.setState({text: txt})}
                            />
                                
                        </View> 

                    </View>

                    <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>
            
                        <TouchableOpacity onPress={this.btnEditDraft} style={styles.button}>
                            <Text style={styles.buttonText}>{translate('editDraftBtnSaveChanges')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.deleteDraft} style={styles.buttonAlternative}>
                            <Text style={styles.buttonText}>{translate('editDraftBtnDeleteDraft')}</Text>
                        </TouchableOpacity>

                    </View>
                    
                </ScrollView>

            </View>
        );
    }
};