import React, { Component } from 'react';
import { StyleSheet, Text, Clipboard, View, Button, ToastAndroid, TouchableOpacity} from 'react-native';

/*
Name Generator algorithm by RyanGoslingsBugle

https://teasnake.wordpress.com/2016/03/03/how-to-build-a-simple-javascript-name-generator/
*/

export default class NameGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    generateName = () => {
        //first name
        const name1 = ["Aynur","Asriel","Baldor","Hannah","Vannet"];

        //last name
        const name2 = ["the Great","Iron Heart","Turambar", "Valstar"];

        const finalName = name1[Math.floor(Math.random() * name1.length)] + " " + name2[Math.floor(Math.random() * name2.length)];

        this.setState({name: finalName});
    }

    copyToClipboard = () => {
        //if user touches a region without name yet
        if(this.state.name == '') {
            return;
        }
        //copy the name to clipboard
        Clipboard.setString(this.state.name);

        //make a toast with the name
        ToastAndroid.show(this.state.name + " copied to your clipboard", ToastAndroid.SHORT);
    }


    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Name Generator</Text>
                <Text style={styles.texts}>Press the button to generate random names, you can copy it to your clipboard by clicking on it.</Text>
                
                <TouchableOpacity onPress={this.copyToClipboard}>
                    <Text style={styles.texts}>{this.state.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.generateName}>
                    <Text style={styles.buttonText}>GENERATE!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    texts: {
        margin: 15,
        fontSize: 15

    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    button: {
        padding:10,
	    backgroundColor: '#202646',
	    borderRadius:5
    }
  });
  
