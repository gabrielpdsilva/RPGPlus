import React from 'react';
import {StyleSheet, TextInput } from 'react-native';

const CustomTextInput = (props) => {

    const {placeholder} = props;

    return(
        <TextInput style={styles.textArea} placeholder={props.placeholder}/>
    );
}

const styles = StyleSheet.create({
    textArea: {
        width: 280,
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
    },
});

export default CustomTextInput;