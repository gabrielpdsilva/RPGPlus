import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class SketchScreen extends Component {
    constructor(props){
        super(props);
            this.state = {
                cont: 1,
        }

    };
                
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.cont}</Text>
                <View style={styles.textAreaContainer}>
                    <TextInput style={styles.textArea} placeholder="Name of the story..."/>
                    <TextInput style={styles.textArea} placeholder="Category of the story (medieval, cyberpunk)..."/>
                    <TextInput style={styles.textArea} placeholder="System used (Storyteller, D20)... "/>
                    <TextInput style={styles.textArea}
                               placeholder="Type here a basic sketch of your storyboard..."
                               multiline = {true} //textinput will be multiline
                               height = {150}
                               textAlignVertical= 'top'/>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.setState({cont: this.state.cont + 1})}/*this.props.navigation.navigate("Test")}>*/>
                    <Text style={styles.buttonText}>CREATE SKETCH</Text>
                </TouchableOpacity>
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
        padding: 10,
      },

    textArea: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
      },
      button: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fc870a',
        borderRadius:5
      },
    
});