import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Alert,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';


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
        ToastAndroid.show("Draft updated!", ToastAndroid.SHORT);
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
            .then(() => ToastAndroid.show("Draft deleted!", ToastAndroid.SHORT))
            .catch((error) => alert("Something went wrong:" + error));

        //goes to home screen
        this.props.navigation.navigate("Home");

    }

    btnDeleteDraft = () => {

        Alert.alert(
            'Delete Draft', //title
            'Are you sure you want to delete your draft?', //message
            [
                {
                    text: 'Cancel',
                    onPress: () => ToastAndroid.show("Delete canceled.", ToastAndroid.SHORT),
                    style: 'cancel'
                },
                {
                    text: 'OK', onPress: () => {
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
                alert("No docs here.");
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
                
                <CustomAppBar title="Edit Draft" subtitle="" backIsVisible={true} navigation={this.props.navigation}/>

                <ScrollView style={{marginTop: 14}}>
                
                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Name</Text>
                            <TextInput
                                placeholder="Loading..."
                                style={styles.createDraftInput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                            />

                        </View>

                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>Category</Text>
                            <TextInput
                                placeholder="Loading..."
                                style={styles.createDraftInput}
                                value={this.state.category}
                                onChangeText={(txt) => this.setState({category: txt})}
                            />
                                
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>System</Text>
                            <TextInput
                                placeholder="Loading..."
                                style={styles.createDraftInput}
                                value={this.state.system}
                                onChangeText={(txt) => this.setState({system: txt})}
                            />

                        </View>

                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>Text</Text>
                            <TextInput
                                placeholder="Loading..."
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
                            <Text style={styles.buttonText}>Save Changes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.deleteDraft} style={styles.button}>
                            <Text style={styles.buttonText}>Delete Draft</Text>
                        </TouchableOpacity>

                    </View>
                    
                </ScrollView>

            </View>
        );
    }
};