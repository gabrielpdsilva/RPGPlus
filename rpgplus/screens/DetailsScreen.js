import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const DetailsScreen = ({navigation}) => {   
    return(
        <View style={styles.container}>
            <Text style={styles.texts}>
                RPG+ (RPGPlus) is a project made for tests and studies using React Native technology.
            </Text>
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
    texts: {
        color: 'white',
        margin: 15,
        fontSize: 15,
        textAlign: 'center'
    
      },
});

export default DetailsScreen;