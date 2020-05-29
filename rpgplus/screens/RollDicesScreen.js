import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
} from 'react-native';

import CustomButton from '../components/CustomButton';

import CustomAppBar from '../components/CustomAppBar';

export default class SketchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            modifier: 0,
            type: 4,
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

                    <CustomButton
                        title="ROLL"
                        onPress={() => this.roll(type, modifier)}
                        style={{}}
                        textStyle={{}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    childContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    container: {
        flex: 1,
        backgroundColor: '#2d3042',
    },
    textAreaContainer: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        padding: 10,
        backgroundColor: '#232635',
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
    },
    
    textinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#1d1f2b',
        color: 'white',
        width: 250,
    },
    
    pickerStyle:{  
        //height: 150,
        width: "70%",  
        color: 'white',  
        justifyContent: 'center',  
    }  
});