import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomText from '../components/CustomText';
import CustomTitle from '../components/CustomTitle';

export default class LoginScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <CustomTitle>Login</CustomTitle>
                <CustomText>Hello there!</CustomText>
                
                <CustomTextInput placeholder="E-mail..."/>
                <CustomTextInput placeholder="Password..."/>

                <CustomButton
                    title="GO TO REGISTER!"
                    onPress={() => this.props.navigation.navigate("Register")}
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
        backgroundColor: '#F5FCFF',
        backgroundColor: '#2d3042',
    }
});