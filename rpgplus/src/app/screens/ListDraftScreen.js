import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

import styles from '../style/styles';

import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';
import 'firebase/firestore';

//Useful links:
//https://blog.rocketseat.com.br/scroll-infinito-no-react-native/
//https://stackoverflow.com/questions/53861022/rendering-react-components-mapped-from-firebase-firestore

export default class ListDraftScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            data: []
        };
    }

    componentDidMount = () => {
        
        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        //gets all the drafts from firestore and store it in the state
        dbh.collection("users").doc(user.uid).collection("sketchs").get().then((snapshot) => {

            //if user has no docs
            if(snapshot.empty){
                this.setState({message: 'Sorry, but you have no drafts.'}); //shows a message that the user has no drafts
                return;
            }

            this.setState({message: 'Below is the list of all of your drafts'});

            //gets the docs and stores it inside the 'data' state
            snapshot.forEach((doc) => (
                this.setState((prevState) => ({
                    data: [...prevState.data, {
                        id: doc.id,
                        name: doc.data().name,
                        category: doc.data().category,
                        system: doc.data().system,
                        text: doc.data().text,
                    }]
                }))
            ))
        }) 
        
    }

    //when user clicks on item
    onClickItem = (item) => {

        //navigates to draft model and send the ID of the item to the new screen
        this.props.navigation.navigate("Draft Model", {itemId: item.id});
    }
    
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.onClickItem(item)}>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>ID: {item.id}</Text>
                <Text style={styles.textItem}>Name: {item.name}</Text>
                <Text style={styles.textItem}>Category: {item.category}</Text>
                <Text style={styles.textItem}>System: {item.system}</Text>
                <Text style={styles.textItem}>Text: {item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    render(){
        return(
           <View style={styles.container}>
                
                <CustomAppBar title="My Drafts" subtitle="" navigation={this.props.navigation}/>

                <View style={styles.childContainer}>

                    <Text style={styles.text}>{this.state.message}</Text>
                    
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id} //need to fix this
                    />
                </View>
    
            </View>
        );
    }
}