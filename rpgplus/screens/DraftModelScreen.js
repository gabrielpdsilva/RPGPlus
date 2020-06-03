import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Alert
} from 'react-native';

import CustomButton from '../components/CustomButton';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';
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

    deleteDraft = () => {

        const draftId = this.state.id;

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();

        //delete the doc
        
        dbh.collection("users").doc(user.uid).collection("sketchs").doc(draftId).delete();

        //toast a message
        ToastAndroid.show("Draft deleted! ", ToastAndroid.SHORT);

        //goes to the previous screen
        this.props.navigation.goBack();

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
    componentWillMount = () => {

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();

        //gets the ID of the document that the user has chosen
        const itemID = this.props.route.params.itemId;

        let draftRef = dbh.collection("users").doc(user.uid).collection("sketchs").doc(itemID);

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

    render(){
        return(
            <View style={styles.container}>
                
                <CustomAppBar title="Edit Draft" subtitle=""/>
                
                <View style={styles.textAreaContainer}>

                    <Text style={styles.title}>Here you can edit or delete your draft.</Text>

                    <Text style={styles.text}>Name:</Text>
       
                    <TextInput style={styles.textinput} value={this.state.name} editable={false} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Loading..." />

                    <Text style={styles.text}>Category:</Text>
                    
                    <TextInput style={styles.textinput} value={this.state.category} editable={false} onChangeText={ (txt) => this.setState({category: txt}) } placeholder="Loading..."/>
                    
                    <Text style={styles.text}>System:</Text>
                    
                    <TextInput style={styles.textinput} value={this.state.system} editable={false} onChangeText={ (txt) => this.setState({system: txt}) } placeholder="Loading..." />
                    
                    <Text style={styles.text}>Text:</Text>
                    
                    <TextInput style={styles.textinput}
                        value={this.state.text}
                        multiline = {true} //textinput will be multiline
                        height = {150}
                        textAlignVertical= 'top'
                        editable={false}
                        onChangeText={ (txt) => this.setState({text: txt}) }
                        placeholder="Loading..."
                    />

                </View>

                <View style={styles.center}>

                    <CustomButton title="DELETE DRAFT" onPress={this.btnDeleteDraft}/>

                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#2d3042',
    },

    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#232635',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center'
    },

    textinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        backgroundColor: '#2d3042',
        color: 'white'
    },  

    text: {
        color: 'white',
        margin: 5,
        fontSize: 15,
    },
});