import React, { Component } from 'react';
import {
    Text,
    View,
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
import { Hoshi } from 'react-native-textinput-effects';
import AwesomeButton from "react-native-really-awesome-button";

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

        const user = firebase.auth().currentUser;

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

        ToastAndroid.show(translate('toastDraftEditUpdated'), ToastAndroid.SHORT);
    }

    handleDeleteDraft = () => {

        Alert.alert(
            translate('alertDraftEditTitle'), //title
            translate('alertDraftEditMessage'), //message
            [
                {
                    text: translate('alertCancel'),
                    onPress: () => ToastAndroid.show(translate('toastDraftEditCanceled'), ToastAndroid.SHORT),
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
        .then(() => ToastAndroid.show(translate('toastDraftEditDeleted'), ToastAndroid.SHORT))
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

        draftRef.get()
        .then(doc => {
            if (!doc.exists) {
                alert(translate('alertDraftEditNoExist'));
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

        const name = this.state.name;
        const category = this.state.category;
        const system = this.state.system;
        const text = this.state.text;
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

                <ScrollView style={{marginTop: 8}}>

                    <View style={styles.cardBackground}>

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftName')}
                            placeholder={translate('editDraftLoading')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={name ? name : translate('editDraftLoading')}
                            onChangeText={(txt) => this.setState({name: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftCategory')}
                            placeholder={translate('editDraftLoading')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={category ? category : translate('editDraftLoading')}
                            onChangeText={(txt) => this.setState({category: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftSystem')}
                            placeholder={translate('editDraftLoading')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={system ? system : translate('editDraftLoading')}
                            onChangeText={(txt) => this.setState({system: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftText')}
                            placeholder={translate('editDraftLoading')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={1000}
                            height={80}
                            textAlignVertical = 'top'
                            paddingTop = {10}
                            multiline
                            value={text ? text : translate('editDraftLoading')}
                            onChangeText={(txt) => this.setState({text: txt})}
                        /> 

                    </View>
                    
                    <View style={{ 
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    flexDirection: 'row',
                                    justifyContent:'space-between',
                                    padding: 20
                                }}>

                        <AwesomeButton
                            backgroundColor={colors.blue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={100}
                            onPress={next => {
                                this.handleSaveChanges();
                                next();
                            }}
                        >
                            {translate('editDraftBtnSaveChanges')}
                        </AwesomeButton>

                        <AwesomeButton
                            backgroundColor={colors.blue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={100}
                            onPress={next => {
                                this.handleDeleteDraft();
                                next();
                            }}
                        >
                            {translate('editDraftBtnDeleteDraft')}
                        </AwesomeButton>

                    </View>
                    
                </ScrollView>

            </View>
        );
    }
};