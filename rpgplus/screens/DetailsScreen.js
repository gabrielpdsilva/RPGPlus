import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const DetailsScreen = ({navigation}) => {   
    return(
        <View style={styles.container}>
            
            <Text style={styles.text}>RPG+ (RPGPlus) is a project made for tests and studies using React Native technology.
                You may see bugs, problems with styles, etc.</Text>
        </View>
    );
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
});

export default DetailsScreen;