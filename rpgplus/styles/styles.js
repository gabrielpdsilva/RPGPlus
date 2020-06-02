import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    text: {
        color: 'white',
        margin: 5,
        fontSize: 15,
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


    listItem: {
        backgroundColor: '#f75605',
        width: 200,
        margin: 10,
        marginVertical: 2,
        marginHorizontal: 2,
    },

    textItem: {
        color: 'white',
        margin: 3,
        fontSize: 15,
    },

    item: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 2,
        width: 250,
    },

    //style of the child container that has custom app bar
    childContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    //style of the container that has custom app bar
    container: {
        flex: 1,
        backgroundColor: '#2d3042',
    },

});

export default styles;