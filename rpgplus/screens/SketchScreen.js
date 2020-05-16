import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import CustomButton from '../components/CustomButton';

export default class SketchScreen extends Component {
                
    render(){
        return(
            <View style={styles.container}>
                <Text>...</Text>
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

                <CustomButton
                    title="CREATE"
                    onPress={() => alert("Clicked.")}
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
      },

    textArea: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    
});