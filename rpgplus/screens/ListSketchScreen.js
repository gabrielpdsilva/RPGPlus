import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import firebase from '../controller/Firebase';
import 'firebase/firestore';

//Useful links:
//https://blog.rocketseat.com.br/scroll-infinito-no-react-native/
//https://stackoverflow.com/questions/53861022/rendering-react-components-mapped-from-firebase-firestore

export default class ListSketchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        const user = firebase.auth().currentUser;
        const dbh = firebase.firestore();
        dbh.collection("users").doc(user.uid).collection("sketchs").get().then((snapshot) => (
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
        ))
    }
    
      renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.textItem}>ID: {item.id}</Text>
            <Text style={styles.textItem}>Name: {item.name}</Text>
            <Text style={styles.textItem}>Category: {item.category}</Text>
            <Text style={styles.textItem}>System: {item.system}</Text>
            <Text style={styles.textItem}>Text: {item.text}</Text>
        </View>
      );

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>List Test screen</Text>
                <Text style={styles.text}>...</Text>
                
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    onPress={() => alert("ok")}
                    keyExtractor={item => item.id} //need to fix this
                />

            </View>
        );
    }
}

/*

function Item({ title, name }) {
return (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{name}</Text>
    </View>
);
}

<FlatList
                    data={DATA}
                    renderItem={({ item, name }) => <Item title={item.title} name={item.name}/>}
                    keyExtractor={item => item.id}
                />

*/

const styles = StyleSheet.create({
    
    listItem: {
        backgroundColor: '#f75605',
        width: 250,
        margin: 10,
        marginVertical: 2,
        marginHorizontal: 2,
    },

    textItem: {
        color: 'white',
        margin: 5,
        fontSize: 15,
    },

    item: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 2,
        width: 250,
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
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