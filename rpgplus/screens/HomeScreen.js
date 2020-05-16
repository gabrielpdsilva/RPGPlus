import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({navigation}) => {   
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <CustomButton
                title="Click me!"
                onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
                style={{}}
                textStyle={{}}
            />
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
      texts: {
        color: 'white',
        margin: 15,
        fontSize: 15,
        textAlign: 'center'
    
      },
});

export default HomeScreen;