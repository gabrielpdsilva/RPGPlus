import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    text: {
        color: 'white',
        margin: 5,
        fontSize: 15,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },

    textinput: {  
        width: 280,
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#232635',
        color: 'white'
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },

    childContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#232635',
        borderColor: 'black',
        borderWidth: 2,
    },

});

export default styles;