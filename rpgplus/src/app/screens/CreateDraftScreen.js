import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';

import CustomAppBar from '../components/CustomAppBar';

import styles from '../style/styles';

import firebase from '../controller/Firebase';
import 'firebase/firestore';
import DraftForm from './DraftForm';

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

    //add draft to firestore
    addDraft = () => {

        if(this.state.name == '' || this.state.category == '' || this.state.system == '' || this.state.text == '' ){
            alert("All fields must be filled.");
            return;
        }

        const user = firebase.auth().currentUser;

        const dbh = firebase.firestore();

        //draft collection reference
        const collectionRef = dbh.collection("users").doc(user.uid).collection("sketchs");

        collectionRef.get().then(snap => {
            if(snap.size >= 10){
                alert("You have reached the maximum number of drafts allowed. You will have to delete at least one draft to continue.");
            }else{

                //create a draft to the doc of the user collection
                collectionRef.add({ //add is used so Firestore can generate a unique ID to the doc

                    name: this.state.name,
                    category: this.state.category,
                    system: this.state.system,
                    text: this.state.text,
        
                }).then((docRef) => {
                    //toast a message
                    ToastAndroid.show("Draft created! ", ToastAndroid.SHORT);
        
                    //set all states to ''
                    this.setState({name: '', category: '', system: '', text: ''});
        
                    //goes to home screen
                    this.props.navigation.navigate("Home");
        
                }).catch((error) => {
                    alert("Could not add the doc, error:\n" + error);
                });
            }
        }); 
    }
   
    render(){

        return(

            <View style={styles.container}>
                
                <CustomAppBar title="New Draft" subtitle="" navigation={this.props.navigation}/>
                
                <ScrollView style={{marginTop: 14}}>

                    <Text style={styles.title}>Create a draft for your campaign! </Text>
                    <Text style={styles.text}>You can create 10 drafts.</Text>
       
                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Nome</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                                placeholder = "Dance of the dragons..."
                            />

                        </View>

                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>Categoria</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.category}
                                onChangeText={(txt) => this.setState({category: txt})}
                                placeholder = "Medieval..."
                            />
                                
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Sistema</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.system}
                                onChangeText={(txt) => this.setState({system: txt})}
                                placeholder = "D20..."
                            />

                        </View>
                    
                        <View style={{marginTop: 14}}>
                                
                            <Text style={styles.inputTitle}>Texto</Text>
                            <TextInput
                                multiline = {true}
                                height = {150}
                                textAlignVertical = 'top'
                                style={styles.newinputBOX}
                                value={this.state.text}
                                onChangeText={(txt) => this.setState({text: txt})}
                                placeholder = "This story starts when a..."
                            />
                                
                        </View> 

                    </View>
                </ScrollView>

                <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>
            
                    <TouchableOpacity onPress={this.addDraft} style={styles.button}>
                        <Text style={styles.buttonText}>CREATE</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}