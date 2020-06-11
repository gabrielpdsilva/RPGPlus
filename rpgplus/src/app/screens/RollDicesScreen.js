import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Picker,
} from 'react-native';

import styles from '../styles/styles';

import CustomAppBar from '../components/CustomAppBar';

export default class SketchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,      //final result
            modifier: 0,    //modifier, if the player has for example +1 or -2 of bonus points
            type: 4,        //type of the dice (D10, D20...)
        }
    }

    //roll dice function
    roll = (type, modifier) => {

        let value = Math.floor((Math.random() * type) + 1); //rolls 1 dice

        value += parseInt(modifier); //will make a sum of the result with the modifier

        this.setState({result: value});
    }

    render(){
        let type = this.state.type;
        let modifier = this.state.modifier;

        return(
            <View style={styles.container}>
                
                <CustomAppBar title="Roll Dices" subtitle=""/>
                <View style={styles.childContainer}>
                
                    <Text style={styles.title}>Roll Dices</Text>
                    <Text style={styles.text}>Please, select the type of the dice and the modifier:</Text>
                 

                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.state.type}
                        onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}
                    >
                        <Picker.Item label="D4" value={4}/>
                        <Picker.Item label="D6" value={6}/>
                        <Picker.Item label="D8" value={8}/>
                        <Picker.Item label="D10" value={10}/>
                        <Picker.Item label="D12" value={12}/>
                        <Picker.Item label="D20" value={20}/>
                        <Picker.Item label="D100" value={100}/>
            
                    </Picker>

                    <TextInput
                        style={styles.textinput}
                        value={this.state.modifier}
                        maxLength={2}
                        keyboardType = 'numeric'
                        onChangeText={ (txt) => this.setState({modifier: txt}) }
                        placeholder="Modifier..."
                    />

                    <Text style={styles.text}>Result: {this.state.result}</Text>

                    <TouchableOpacity onPress={() => this.roll(type, modifier)} style={styles.button}>
                        <Text style={styles.buttonText}>ROLL</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}