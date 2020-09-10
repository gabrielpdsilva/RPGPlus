import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Picker,
    ToastAndroid,
    Clipboard,
    Text
} from 'react-native';

import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';
import {translate} from '../locales/localeConfig';
import AwesomeButton from "react-native-really-awesome-button";
import colors from '../style/colors';

/*
Name Generator algorithm by RyanGoslingsBugle

https://teasnake.wordpress.com/2016/03/03/how-to-build-a-simple-javascript-name-generator/
*/

export default class NameGeneratorScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            pickerValue:'medieval',
            name: '...'
        }	
    };
    
    generateName = (firstName, lastName) => {
    
        //generates a random name based on the firstName
        //and lastName that the user has chosen
        const finalName = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];

        this.setState({name: finalName});

    }

    handleGenerateName = (category) => {
        let firstName;
        let lastName;

        switch(category){
        
            case "changeling":

                firstName = ["Ax", "Zyx"];
                lastName = ["Yow","D'ella"];
            
            break;

            case "cyberpunk":

                firstName = ["Alpha", "Zero"];
                lastName = ["Zeke","dr0id"];

            break;

            case "elvish":

                firstName = ["Legolas"];
                lastName = ["..."];

            break;
    
            case "lovecraft":
                firstName = ["Edmund","Francis","Carla","Xavier"];
                lastName = ["Newton", "Kennedy"];
            
            break;

            case "mage":

                firstName = ["Radagast", "Gandalf"];
                lastName = ["the White", "the Green"];
            
            break;
    
            case "medieval":

                firstName = ["Aynur","Asriel","Baldor","Hannah","Vannet"];
                lastName = ["the Great","Iron Heart","Turambar", "Valstar", "Yelenna", "The Great One"];
            
            break;

            case "werewolf":
                firstName = ["Ganur", "Foryn"];
                lastName = ["Heart of the Forest", "ay' Ul"];
        
            break;
    
            case "vampire":
                firstName = ["Victoria","Anna","Richard"];
                lastName = ["Valerius","Stohess"];

            break;
    
            default:
                alert("No options.");
        }

        this.generateName(firstName, lastName);

    }

    handleCopyToClipboard = () => {

        const name = this.state.name;

        //if user touches a region without name yet
        if(name == '' || name == '...') return;
    
        //copy the name to clipboard
        Clipboard.setString(name);

        ToastAndroid.show(name + " " + translate('toastNameGeneratorCopied'), ToastAndroid.SHORT);
    }

    render() {
        const name = this.state.name;
        const pickerValue = this.state.pickerValue;

        return (
            <View style={styles.container}>

                <CustomAppBar title={translate('appBarGenerate')} subtitle="" navigation={this.props.navigation}/>

                <View style={{marginTop: 8}}>
      
                    <Text style={styles.title}>{translate('generatorTitle')}</Text>

                    <Text style={styles.text}>{translate('generatorSubtitle')}</Text>

                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => this.setState({pickerValue: itemValue})}
                    >
                        <Picker.Item label="Changeling: The Dreaming" value="changeling"/>
                        <Picker.Item label="Cyberpunk" value="cyberpunk"/>
                        <Picker.Item label="Elvish" value="elvish"/>
                        <Picker.Item label="Lovecraft Mythos" value="lovecraft"/>
                        <Picker.Item label="Mage: The Ascension" value="mage"/>
                        <Picker.Item label="Medieval" value="medieval"/>
                        <Picker.Item label="Vampire: the Masquerade" value="vampire" />
                        <Picker.Item label="Werewolf: the Apocalypse" value="werewolf" />
                    
                    </Picker>

                    <TouchableOpacity onPress={this.handleCopyToClipboard}>
                        <Text style={styles.text}>{name}</Text>
                    </TouchableOpacity>

                    <View style={{justifyContent:'center', alignItems: 'center', marginTop: 10, marginBottom: 10}}>

                        <AwesomeButton
                            backgroundColor={colors.blue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress={false}
                            width={100}
                            onPress={next => {
                                this.handleGenerateName(pickerValue);
                                next();
                            }}
                        >
                            {translate('generatorBtnGenerate')}
                        </AwesomeButton>

                    </View>

                </View>

            </View>
        );
    }
}