/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    ScrollView,
    Alert
} from 'react-native';
import styles from '../style/styles';
import colors from '../style/colors';
import CustomAppBar from '../components/CustomAppBar';
import {translate} from '../locales/localeConfig';
import { Hoshi } from 'react-native-textinput-effects';
import AwesomeButton from "react-native-really-awesome-button";
import { Audio } from 'expo-av';

export default class RollDicesScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: 4,        //type of the dice (D10, D20...)
            quantity: 0,    //quantity of dices to get rolled
            modifier: 0,    //modifier, if the player has for example +1 or -2 of bonus points
            results: [],    //final results
            sum: 0,         //sum of the final results
        }
    }

    roll = (type, quantity, modifier) => {
        let value;
        let results = [];

        for(let i = 0; i < quantity; i++){
            value = Math.floor((Math.random() * type) + 1); //rolls 1 dice
            results[i] = value; //will keep the value at that current index
        }

        let sumOfResults = results.reduce((a, b) => a + b, 0);
        
        sumOfResults += parseInt(modifier); //will make a sum of the results with the modifier      

        this.setState({
            results: results,
            sum: sumOfResults
        });
    }

    handleRollDices = (type, quantity, modifier) => {

        if(quantity < 1 || quantity > 5){
            Alert.alert(translate('alertCommonTitle'), translate('alertRollQuantity'));
            return;
        }

        if(modifier > 30 || modifier < (-30)){
            Alert.alert(translate('alertCommonTitle'), translate('alertRollModifier'));
            return;
        }

        this.playDiceEffect();
        this.roll(type, quantity, modifier);
    }

    playDiceEffect = async () => {

        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('../../../assets/sounds/dice_effect.mp3'));
            await soundObject.playAsync();
            //The sound is playing!
            
        } catch (error) {
            console.log("Something went wrong while trying to play the sound: " + error);
        } finally {

            // Unload the sound from memory
            // when done using the Sound object
            await soundObject.unloadAsync();
        }
    }

    render(){

        const type = this.state.type;
        const quantity = this.state.quantity;
        const modifier = this.state.modifier;
        const results = this.state.results;
        const sum = this.state.sum;

        return(
            <View style={styles.container}>
                
                <CustomAppBar title={translate('appBarRollDices')} subtitle="" navigation={this.props.navigation}/>
                
                <ScrollView style={{marginTop: 8}}>

                    <View style={styles.cardItem}>
                
                        <Text style={styles.title}>{translate('rollTitle')}</Text>
                        <Text style={styles.text}>{translate('rollSubtitle')}</Text>
                        <Text style={styles.text}>{translate('rollMaxAllowed')}</Text>

                        <View style={styles.cardItem}>

                            <Text style={{marginBottom: 0, marginHorizontal: 25, fontSize: 16}}>{translate('rollType')}</Text>

                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={type}
                                onValueChange={(itemValue) => this.setState({type: itemValue})}
                            >
                                <Picker.Item label="D4" value={4}/>
                                <Picker.Item label="D6" value={6}/>
                                <Picker.Item label="D8" value={8}/>
                                <Picker.Item label="D10" value={10}/>
                                <Picker.Item label="D12" value={12}/>
                                <Picker.Item label="D20" value={20}/>
                                <Picker.Item label="D100" value={100}/>

                            </Picker>

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('rollQuantity')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={2}
                                keyboardType = 'numeric'
                                value={quantity ? String(quantity) : null}
                                onChangeText={(txt) => this.setState({quantity: txt})}
                            />

                            <Hoshi
                                style={styles.hoshiStyle}
                                borderColor={colors.orange}
                                labelStyle={{color: colors.black}}
                                inputStyle={{color: colors.black}}
                                backgroundColor={colors.white}
                                label={translate('rollModifier')}
                                borderHeight={3}
                                inputPadding={16}
                                maxLength={2}
                                keyboardType = 'numeric'
                                value={modifier ? String(modifier) : null}
                                onChangeText={(txt) => this.setState({modifier: txt})}
                            />
                            
                        </View>

                        {
                            results.map((item, key)=>
                            (
                                <Text key={key} style={styles.text}>{key + 1}{translate('rollCountingDices')} {item}</Text>)
                            )
                        }

                        <Text style={styles.text}>{translate('rollSum')} {sum}</Text>
                        

                    </View>

                    <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 10}}>

                        <AwesomeButton
                            backgroundColor={colors.slateBlue}
                            backgroundDarker={colors.darkBlue}
                            backgroundShadow={colors.lightGray}
                            progress={false}
                            width={340}
                            onPress={next => {
                                this.handleRollDices(type, quantity, modifier);
                                next();
                            }}
                        >
                            {translate('rollBtnRoll')}
                        </AwesomeButton>

                    </View>

                </ScrollView>

            </View>
        );
    }
}