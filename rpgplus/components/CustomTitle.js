import React from 'react';
import {StyleSheet, Text } from 'react-native';

const CustomTitle = (props) => {

    return(
        <Text style={styles.title}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
      },
      
    
});

export default CustomTitle;