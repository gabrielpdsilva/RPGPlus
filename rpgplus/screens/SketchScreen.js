import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid
} from 'react-native';

import CustomButton from '../components/CustomButton';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

//useful link about user collection on firestore
//https://www.youtube.com/watch?v=qWy9ylc3f9U

export default class SketchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            system: '',
            text: ''
        }
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
        dbh.collection("users").doc(user.uid).collection("sketchs").doc(this.state.name).set({  //need to change the 'this.state.name' in the future

            name: this.state.name,
            category: this.state.category,
            system: this.state.system,
            text: this.state.text,

        }).then(() => {
            //toast a message
            ToastAndroid.show("Sketch created!", ToastAndroid.SHORT);

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
                <View style={styles.textAreaContainer}>

                    <Text style={styles.title}>Sketch</Text>

                    <Text style={styles.text}>Create a sketch for your future campaign!</Text>
       
                    <TextInput style={styles.textinput} value={this.state.name} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Name of the story..." />

                    <TextInput style={styles.textinput} value={this.state.category} onChangeText={ (txt) => this.setState({category: txt}) } placeholder="Category of the story (medieval, cyberpunk)..."/>

                    <TextInput style={styles.textinput} value={this.state.system} onChangeText={ (txt) => this.setState({system: txt}) } placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput}
                    value={this.state.text}
                    multiline = {true} //textinput will be multiline
                    height = {150}
                    textAlignVertical= 'top'
                    onChangeText={ (txt) => this.setState({text: txt}) }
                    placeholder="Type here a basic sketch of your storyboard..." />

                </View>

                <CustomButton
                    title="CREATE"
                    onPress={this.addSketch}
                    style={{}}
                    textStyle={{}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },

    textAreaContainer: {
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#232635',
      },

    textinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        backgroundColor: '#2d3042',
        color: 'white'
    },  
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
      },

    text: {
    color: 'white',
    margin: 5,
    fontSize: 15,
    textAlign: 'center'
    },
});