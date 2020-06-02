import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';

import CustomButton from '../components/CustomButton';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

//useful link about user collection on firestore
//https://www.youtube.com/watch?v=qWy9ylc3f9U

export default class CreateDraftScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            system: '',
            text: ''
        }
    }

    getSketch = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        let sketchRef = dbh.collection("users").doc(user.uid).collection("sketchs").doc('test'); //Yjvt0Xf5AxbZBvlF6mCr
        sketchRef.get()
        .then(doc => {
            if (!doc.exists) {
                alert('No such document!');
            } else {
                alert('Done');
                this.setState({
                    name: doc.data().name,
                    category: doc.data().category,
                    system: doc.data().system,
                    text: doc.data().text
                });
            }
        })
        .catch(err => {
            alert('Error getting document' + err);
        });

    }

    //add sketch to firestore
    addSketch = () => {

        if(this.state.name == '' || this.state.category == '' || this.state.system == '' || this.state.text == '' ){
            alert("All fields must be filled.");
            return;
        }

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        //create a sketch to the doc of the user collection
        dbh.collection("users").doc(user.uid).collection("sketchs").add({ //add is used so Firestore can generate a unique ID to the doc

            name: this.state.name,
            category: this.state.category,
            system: this.state.system,
            text: this.state.text,

        }).then((docRef) => {
            //toast a message
            ToastAndroid.show("Draft created! " + docRef.id, ToastAndroid.SHORT);

            //set all states to ''
            this.setState({name: '', category: '', system: '', text: ''});

            //goes to home screen
            this.props.navigation.navigate("Home");

        }).catch((error) => {
            alert("Could not add the doc, error:\n" + error);
        });
    }
   
    render(){

        return(

            <View style={styles.container}>
                
                <CustomAppBar title="New Draft" subtitle=""/>
                
                <View style={styles.textAreaContainer}>

                    <Text style={styles.text}>Create a draft for your future campaign!</Text>
       
                    <TextInput style={styles.textinput} value={this.state.name} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Name of the story..." />

                    <TextInput style={styles.textinput} value={this.state.category} onChangeText={ (txt) => this.setState({category: txt}) } placeholder="Category of the story (medieval, cyberpunk)..."/>

                    <TextInput style={styles.textinput} value={this.state.system} onChangeText={ (txt) => this.setState({system: txt}) } placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput}
                        value={this.state.text}
                        multiline = {true} //textinput will be multiline
                        height = {150}
                        textAlignVertical= 'top'
                        onChangeText={ (txt) => this.setState({text: txt}) }
                        placeholder="Type here a basic draft of your storyboard..."
                    />

                </View>

                <View style={styles.center}>
            
                    <CustomButton    //I've made another view because I couldn't center the Button without it, need to fix it later.
                        title="CREATE"
                        onPress={this.addSketch}
                        style={{}}
                        textStyle={{}}
                    />

                    <CustomButton title="GET" onPress={this.getSketch}/>

                </View>
            </View>
        );
    }
}

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
        textAlign: 'center'
    },
});