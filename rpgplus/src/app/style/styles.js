import {StyleSheet} from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.darkTheme,
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

        color: colors.white,
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
        color: colors.white,
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
        borderColor: colors.orange,
        borderWidth: 1,
        backgroundColor: colors.darkBackground,
        color: colors.white,
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
    lineStyle: {
        borderWidth: 0.5,
        borderColor: colors.orange,
        margin: 5,
        width: 290,
   },

    separatorLine: {
        borderWidth: 0.5,
        borderColor: colors.black,   
   },

    createDraftInput: {
        borderBottomColor: colors.orange,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: colors.white,
    },

    createDraftInputBox: {
        borderBottomColor: colors.orange,
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 130,
        fontSize: 15,
        color: colors.white,
    },

    //text title
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center'
    },

    listItem: {
        borderRadius: 10,
        backgroundColor: '#303e54',
        margin: 6,
        padding: 10
    },

    itemTitle: {
        color: colors.orange,
        fontSize: 15,
        fontWeight: 'bold',
    },

    itemText: {
        color: colors.white,
    },


    //picker used in roll dices screen and name generator screen
    pickerStyle: {  
        //height: 150,
        color: colors.white,
    },

    headerAppBar: {
        backgroundColor: colors.orange,
    },

    buttonText: {
        color: colors.white,
        textAlign: 'center'
    },

    button: {
        width: 290,
        margin: 5,
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonAlternative: {
        width: 290,
        margin: 5,
        height: 50,
        backgroundColor: colors.darkBlue,
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
        paddingLeft: 12,
    },
    
    drawerTitle: {
        fontSize: 14,
        marginTop: 3,
        fontWeight: 'bold',
        color: colors.white,
    },

    drawerCaption: {
        fontSize: 14,
        lineHeight: 14,
        color: colors.white,
    },

    drawerSection: {
        marginTop: 5,
    },

    drawerSubmenuTitle: {
        marginLeft: 15,
        fontSize: 14,
        marginTop: 3,
        fontWeight: 'bold',
        color: colors.white,
    },
    /**********************
     * drawerContent style ends here*
     **********************/
});

export default styles;