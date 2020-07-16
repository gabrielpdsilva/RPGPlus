import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';
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

    listenForDrafts = () => {

        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();

        let docsRef = dbh.collection("users").doc(user.uid).collection("sketchs");

        docsRef.get().then((snapshot) => {

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

    componentDidMount = () => {

        this.listenForDrafts();
        
    }

    //when user clicks on item
    onClickItem = (item) => {

        //navigates to draft model and send the ID of the item to the new screen
        this.props.navigation.navigate("Draft Model", {itemId: item.id});
    }

    renderItem = ({item}) => (
        <TouchableOpacity onPress={() => this.onClickItem(item)}>
            <View style={styles.listItem}>

                <View style={{marginTop: 5}}>

                    <Text style={styles.inputTitle}>Name</Text>
                    <Text>{item.name}</Text>

                </View>

                <View style = {styles.separatorLine}/>

                <View style={{marginTop: 5}}>

                    <Text style={styles.inputTitle}>Category</Text>
                    <Text>{item.category}</Text>

                </View>

                <View style = {styles.separatorLine}/>

                <View style={{marginTop: 5}}>

                    <Text style={styles.inputTitle}>System</Text>
                    <Text>{item.system}</Text>

                </View>

                <View style = {styles.separatorLine}/>

                <View style={{marginTop: 5}}>

                    <Text style={styles.inputTitle}>Text</Text>
                    <Text>{item.text}</Text>

                </View>

            </View>
        </TouchableOpacity>
    );

    render(){
        return(
            <View style={styles.container}>
                
                <CustomAppBar title="My Drafts" subtitle="" navigation={this.props.navigation}/>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id} //need to fix this
                    />
                </ScrollView>
            </View>
        );
    }
}