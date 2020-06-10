import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomButton = (props) => {

    const { title = 'Enter', style = {}, textStyle = {}, onPress, disabled } = props;

    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={{}}>
            <Text style={[styles.buttonText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
});

export default CustomButton;