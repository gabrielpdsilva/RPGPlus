import React from 'react';
import {StyleSheet, Text } from 'react-native';

const CustomText = (props) => {

    return(
        <Text style={styles.text}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
      text: {
        color: 'white',
        margin: 15,
        fontSize: 15,
        textAlign: 'center'
      },
});

export default CustomText;