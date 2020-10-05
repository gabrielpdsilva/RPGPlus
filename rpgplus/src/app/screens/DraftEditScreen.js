import React, { Component } from 'react';
import {
    View,
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
import { Hoshi } from 'react-native-textinput-effects';
import AwesomeButton from "react-native-really-awesome-button";

export default class DraftEditScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            name: '',
            category: '',
            system: '',
            text: '',
            id: '',
        }
    }

    handleSaveChanges = () => {

        //remove the current screen from stack
        this.props.navigation.goBack();

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
                    loading: false,
                });
            }
        })
        .catch(err => {
            alert("Error:\n" + err);
        });
    }

    render(){

        const loading = this.state.loading;
        const name = this.state.name;
        const category = this.state.category;
        const system = this.state.system;
        const text = this.state.text;

        return(
            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarDraftModel')} subtitle="" backIsVisible={true} navigation={this.props.navigation}/>            

                <ScrollView style={{marginTop: 8}}>

                    <View style={styles.cardBackground}>

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftName')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={loading ? translate('editDraftLoading') : name}
                            onChangeText={(txt) => this.setState({name: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftCategory')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={loading ? translate('editDraftLoading') : category}
                            onChangeText={(txt) => this.setState({category: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftSystem')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={50}
                            value={loading ? translate('editDraftLoading') : system}
                            onChangeText={(txt) => this.setState({system: txt})}
                        />

                        <Hoshi
                            style={styles.hoshiStyle}
                            borderColor={colors.orange}
                            labelStyle={{color: colors.black}}
                            inputStyle={{color: colors.black}}
                            backgroundColor={colors.white}
                            label={translate('editDraftText')}
                            borderHeight={3}
                            inputPadding={16}
                            maxLength={1000}
                            height={80}
                            textAlignVertical = 'top'
                            paddingTop = {10}
                            multiline
                            value={loading ? translate('editDraftLoading') : text}
                            onChangeText={(txt) => this.setState({text: txt})}
                        /> 

                    </View>
                    
                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 0}}>

                        <AwesomeButton
                            backgroundColor={colors.slateBlue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={340}
                            onPress={next => {
                                this.handleSaveChanges();
                                next();
                            }}
                        >
                            {translate('editDraftBtnSaveChanges')}
                        </AwesomeButton>

                    </View>

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

                        <AwesomeButton
                            backgroundColor={colors.slateBlue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress
                            width={340}
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