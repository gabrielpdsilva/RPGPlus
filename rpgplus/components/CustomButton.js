import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = (props) => {

    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.buttonText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },

    button: {
        width: 280,
        padding: 10,
        margin: 5,
        backgroundColor: '#f75605',
        borderRadius: 25
    },
});

export default CustomButton;