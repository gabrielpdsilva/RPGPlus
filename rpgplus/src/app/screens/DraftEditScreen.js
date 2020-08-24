import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Alert,
    ScrollView,
    Switch
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';
import colors from '../style/colors';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';
import {translate} from '../locales/localeConfig';

export default class DraftEditScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            system: '',
            text: '',
            id: '',
            isSwitchOn: false,
        }
    }

    handleSaveChanges = () => {

        const draftId = this.state.id;

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();

        //gets the current draft
        let docRef = dbh.collection("users").doc(user.uid).collection("drafts").doc(draftId);

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

    handleDeleteDraft = () => {

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

    deleteDraft = () => {

        //remove the current screen from stack
        this.props.navigation.goBack();

        const draftId = this.state.id;
        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();
 
        //delete the doc
        dbh.collection("users").doc(user.uid).collection("drafts").doc(draftId).delete()
        .then(() => ToastAndroid.show(translate('toastDraftModelDeleted'), ToastAndroid.SHORT))
        .catch((error) => console.log(translate('alertCatchError: ') + error));

    }

    componentDidMount = () => {
        this.getChosenDraft();
    }

    getChosenDraft = () => {
        
        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        //gets the ID of the document that the user has chosen
        let itemId = this.props.route.params.itemId;

        let draftRef = dbh.collection("users").doc(user.uid).collection("drafts").doc(itemId);

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

    _onToggleSwitch = () =>  this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

    render(){

        const { isSwitchOn } = this.state;

        return(
            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarDraftModel')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <View style={{marginTop: 14, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>

                    <Text style={styles.title}>{translate('editDraftEditableDraft')}</Text>

                    <Switch
                        trackColor={{ false: colors.darkGray, true: colors.orange }}
                        thumbColor={colors.lightGray}
                        ios_backgroundColor={colors.darkGray}
                        onValueChange={this._onToggleSwitch}
                        value={isSwitchOn}
                    />

                </View>

                <View style={styles.childContainer}>

                    <ScrollView style={{marginTop: 6}}>
                    
                        <View style={styles.inputForm}>

                            <View>                                

                                <Text style={styles.inputTitle}>{translate('editDraftName')}</Text>
                                <TextInput
                                    placeholder={translate('editDraftLoading')}
                                    placeholderTextColor={colors.darkGray}
                                    style={isSwitchOn ? styles.textInput: styles.disabledTextInput}
                                    editable={isSwitchOn}
                                    value={this.state.name}
                                    onChangeText={(txt) => this.setState({name: txt})}
                                />

                            </View>

                            <View style={{marginTop: 14}}>
                                    
                                <Text style={styles.inputTitle}>{translate('editDraftCategory')}</Text>
                                <TextInput
                                    placeholder={translate('editDraftLoading')}
                                    placeholderTextColor={colors.darkGray}
                                    style={isSwitchOn ? styles.textInput: styles.disabledTextInput}
                                    editable={isSwitchOn}
                                    value={this.state.category}
                                    onChangeText={(txt) => this.setState({category: txt})}
                                />
                                    
                            </View>

                            <View style={{marginTop: 14}}>

                                <Text style={styles.inputTitle}>{translate('editDraftSystem')}</Text>
                                <TextInput
                                    placeholder={translate('editDraftLoading')}
                                    placeholderTextColor={colors.darkGray}
                                    style={isSwitchOn ? styles.textInput: styles.disabledTextInput}
                                    editable={isSwitchOn}
                                    value={this.state.system}
                                    onChangeText={(txt) => this.setState({system: txt})}
                                />

                            </View>

                            <View style={{marginTop: 14}}>
                                    
                                <Text style={styles.inputTitle}>{translate('editDraftText')}</Text>
                                <TextInput
                                    editable={isSwitchOn}
                                    placeholder={translate('editDraftLoading')}
                                    placeholderTextColor={colors.darkGray}
                                    multiline = {true}
                                    height = {70}
                                    textAlignVertical = 'top'
                                    style={isSwitchOn ? styles.textInputBox: styles.textInputBoxDisabled}
                                    value={this.state.text}
                                    onChangeText={(txt) => this.setState({text: txt})}
                                />
                                    
                            </View> 

                        </View>

                        <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>
                
                            <TouchableOpacity onPress={this.handleSaveChanges} style={styles.button}>
                                <Text style={styles.buttonText}>{translate('editDraftBtnSaveChanges')}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.handleDeleteDraft} style={styles.buttonAlternative}>
                                <Text style={styles.buttonText}>{translate('editDraftBtnDeleteDraft')}</Text>
                            </TouchableOpacity>

                        </View>
                        
                    </ScrollView>

                </View>

            </View>
        );
    }
};