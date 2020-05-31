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

    //function that will execute before render method
    componentWillMount = () => {

        //gets the current user
        const user = firebase.auth().currentUser;

        //var of firestore database
        const dbh = firebase.firestore();

        //gets the ID of the document that the user has chosen
        const itemID = this.props.route.params.itemId;

        let draftRef = dbh.collection("users").doc(user.uid).collection("sketchs").doc(itemID);
        draftRef.get()
        .then(doc => {
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
                
                <CustomAppBar title="New Draft" subtitle=""/>
                
                <View style={styles.textAreaContainer}>

                    <Text style={styles.text}>Create a draft for your future campaign!</Text>
       
                    <TextInput style={styles.textinput} value={this.state.name} editable={false} onChangeText={ (txt) => this.setState({name: txt}) } placeholder="Name of the story..." />

                    <TextInput style={styles.textinput} value={this.state.category} editable={false} onChangeText={ (txt) => this.setState({category: txt}) } placeholder="Category of the story (medieval, cyberpunk)..."/>

                    <TextInput style={styles.textinput} value={this.state.system} editable={false} onChangeText={ (txt) => this.setState({system: txt}) } placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput}
                        value={this.state.text}
                        multiline = {true} //textinput will be multiline
                        height = {150}
                        textAlignVertical= 'top'
                        editable={false}
                        onChangeText={ (txt) => this.setState({text: txt}) }
                        placeholder="Type here a basic sketch of your storyboard..."
                    />

                </View>

                <View style={styles.center}>
            
                    <CustomButton    //I've made another view because I couldn't center the Button without it, need to fix it later.
                        title="EDIT DRAFT"
                        onPress={this.addSketch}
                        style={{}}
                        textStyle={{}}
                    />

                    <CustomButton title="DELETE DRAFT" onPress={this.getSketch}/>

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