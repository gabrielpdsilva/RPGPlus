import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
} from 'react-native';

import styles from '../style/styles';
import colors from '../style/colors';


import CustomAppBar from '../components/CustomAppBar';

import { translate } from '../locales/localeConfig';

/*Useful site about login
*https://medium.com/better-programming/react-native-firebase-authentication-7652e1d2c8a2
*
*/

export default class DraftForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            category: '',
            system: '',
            text: '',
        }
    }

    render(){
        return(

                <View style={styles.draftBox}>

                    <View style={styles.inputForm}>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Nome</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.name}
                                onChangeText={(txt) => this.setState({name: txt})}
                                placeholder = "Dance of the dragons..."
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>Categoria</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.category}
                                onChangeText={(txt) => this.setState({category: txt})}
                                placeholder = "Medieval..."
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>

                            <Text style={styles.inputTitle}>Sistema</Text>
                            <TextInput
                                style={styles.newinput}
                                value={this.state.system}
                                onChangeText={(txt) => this.setState({system: txt})}
                                placeholder = "D20..."
                            />
                            
                        </View>

                        <View style={{marginTop: 14}}>
                            
                            <Text style={styles.inputTitle}>Texto</Text>
                            <TextInput
                                multiline = {true}
                                height = {150}
                                textAlignVertical = 'top'
                                style={styles.newinputBOX}
                                value={this.state.text}
                                onChangeText={(txt) => this.setState({text: txt})}
                                placeholder = "This story starts when a..."
                            />
                            
                        </View> 

                    </View>

                </View>
        );
    }
}