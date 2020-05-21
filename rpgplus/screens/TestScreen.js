import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    TextInput
} from 'react-native';
import CustomAppBar from '../components/CustomAppBar';
import CustomButton from '../components/CustomButton';

/*
It is used functions (not classes) on some tutorials, functions
are necessary to navigate between screens, as you can see below.
When the button is pressed, it goes to Details Screen. Still, you
can't declare other functions in here, what I see as a problem for now.
Therefore, I will keep using classes on the other screens for a while.

I'm gonna take a look at this link later
https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab

*/
const TestScreen = ({navigation}) => {   
   
    return(
        <View>
            <CustomAppBar/>
            <View style={styles.container}>

            <View style={styles.textAreaContainer}>
                    
                    <TextInput style={styles.textinput} placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput} placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput} placeholder="System used (Storyteller, D20)..." />

                    <TextInput style={styles.textinput}
                    multiline = {true} //textinput will be multiline
                    height = {150}
                    textAlignVertical= 'top'
                   
                    placeholder="Type here a basic sketch of your storyboard..." />

                </View>

                <CustomButton
                    title="..."
                    onPress={() => alert("ok")}
                    style={{}}
                    textStyle={{}}
                />
               
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },
    novo: {
        backgroundColor: '#2d3042'
    },
    textAreaContainer: {
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding: 15,
        backgroundColor: '#232635',
      },

    textinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white',
        backgroundColor: '#2d3042',
        color: 'white'
    },
});

export default TestScreen;