import {StyleSheet} from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.lightTheme,
    },

    childContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputForm: {
        marginBottom: 25,
        marginHorizontal: 30,
    },

    inputTitle: {

        color: colors.black,
        fontSize: 13,

    },

    //container for drafts
    childCenterContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        backgroundColor: colors.darkContainer,
    },

    //common text
    text: {
        color: colors.black,
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
    },

    //text used on forms
    textForm: {
        color: colors.white,
        margin: 5,
        fontSize: 15,
    },

    //textinput style
    textInput: {  
        width: 290,
        padding: 5,
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        backgroundColor: colors.lightTheme,
        color: colors.black,
        borderRadius: 4,
    },

    //textinputBox style
    textInputBox: {  
        width: 290,
        padding: 5,
        height: 150,
        borderColor: colors.black,
        borderWidth: 1,
        backgroundColor: colors.lightTheme,
        color: colors.black,
        borderRadius: 4,
    },

    //rule to separate items
    lineStyle:{
        borderWidth: 0.5,
        borderColor: colors.black,
//        margin:10,
        width: 290,
   },

    //draft box style
    draftBox: {
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.black,
        marginTop: 0,
        width: 290,
    },

    newinput: {
        borderBottomColor: colors.black,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: colors.black,
    },

    newinputBOX: {
        borderBottomColor: colors.black,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 130,
        fontSize: 15,
        color: colors.black,
    },

    //text title
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center'
    },

    listItem: {
        backgroundColor: colors.orange,
        width: 200,
        margin: 10,
        marginVertical: 2,
        marginHorizontal: 2,
    },

    textItem: {
        color: colors.white,
        margin: 3,
        fontSize: 15,
    },

    item: {
        backgroundColor: colors.red,
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 2,
        width: 250,
    },

    //picker used in roll dices screen and name generator screen
    pickerStyle: {  
        //height: 150,
        width: "70%",  
        color: colors.black,  
        justifyContent: 'center',  
    },

    dangerTitle: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 20
    },

    dangerText: {
        color: colors.red,
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
    },

    headerAppBar: {
        backgroundColor: colors.purple,
    },

    //textinput of CreateDraftScreen, need to change it
    customtextinput: {
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        backgroundColor: colors.darkTheme,
        color: colors.white
    },

    buttonText: {
        color: colors.white,
        textAlign: 'center'
    },

    button: {
        width: 290,
        margin: 5,
        height: 50,
        backgroundColor: colors.water,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },

    /**********************
     * drawerContent style*
     **********************/
    drawerContent: {
        flex: 1,
    },
    
    drawerUserInfoSection: {
        paddingLeft: 20,
        //backgroundColor: 'red',
    },
    
    drawerTitle: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: colors.black,
    },

    drawerCaption: {
        fontSize: 14,
        lineHeight: 14,
        color: colors.black,
    },

    drawerSection: {
        marginTop: 15,
    },

    drawerSubmenuTitle: {
        marginLeft: 15,
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: colors.black,
    },
    /**********************
     * drawerContent style ends here*
     **********************/
});

export default styles;