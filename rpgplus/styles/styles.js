import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2d3042',
    },

    childContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //common text
    text: {
        color: 'white',
        margin: 5,
        fontSize: 15,
        textAlign: 'center',
    },

    //textinput style
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

    //text title
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

    //picker used in roll dices screen and name generator screen
    pickerStyle: {  
        //height: 150,
        width: "70%",  
        color: 'white',  
        justifyContent: 'center',  
    },

    dangerTitle: {
        color: '#f91818',
        fontWeight: 'bold',
        fontSize: 20
    },

    dangerText: {
        color: '#f91818',
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
    },
});

export default styles;