import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
} from 'react-native';

import CustomButton from '../components/CustomButton';

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
                <Text style={styles.title}>Roll Dices</Text>
               
                <View style={styles.textAreaContainer}>
                    
                   <Text style={styles.text}>Please, select:</Text>
                   <Text style={{textAlign: 'center'}}>________________________________________</Text>
                    
                    <Text style={styles.text}>Type of the dice (D10, D20...)</Text>

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

                    <Text style={{textAlign: 'center'}}>________________________________________</Text>
                    <Text style={styles.text}>The modifier:</Text>

                    <TextInput
                        style={styles.textinput}
                        value={this.state.modifier}
                        maxLength={2}
                        keyboardType = 'numeric'
                        onChangeText={ (txt) => this.setState({modifier: txt}) }
                        placeholder="0"
                    />

                    <Text style={styles.text}>Result: {this.state.result}</Text>

                </View>

                <CustomButton
                    title="ROLL"
                    onPress={() => this.roll(type, modifier)}
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
        width: 150,
    },
    
    pickerStyle:{  
        //height: 150,
        width: "90%",  
        color: 'white',  
        justifyContent: 'center',  
    }  
});