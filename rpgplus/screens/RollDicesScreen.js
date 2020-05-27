import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import CustomButton from '../components/CustomButton';

export default class SketchScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            quantity: 0,
            type: 0,
        }
    }

    
    roll = (type) => {

        const value = Math.floor((Math.random() * type) + 1);
        this.setState({result: value});

    }


    render(){
        let type = this.state.type;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Roll Dices screen</Text>
                <Text style={styles.text}>You can choose the type of the dice (D6, D10, D20...), the quantity and a modifier.</Text>

                <TextInput
                    style={styles.textinput}
                    value={this.state.type}
                    keyboardType = 'numeric'
                    onChangeText={ (txt) => this.setState({type: txt}) }
                    placeholder="Type..."
                />

                <TextInput
                    style={styles.textinput}
                    value={this.state.quantity}
                    keyboardType = 'numeric'
                    onChangeText={ (txt) => this.setState({quantity: txt}) }
                    placeholder="Quantity..."
                />

                <Text style={styles.text}>{this.state.result}</Text>
                <CustomButton
                    title="ROLL"
                    onPress={() => this.roll(type)}
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
    textinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        backgroundColor: '#2d3042',
        color: 'white',
        width: 150,
    }, 
});