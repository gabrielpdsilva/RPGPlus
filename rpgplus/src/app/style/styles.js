import {StyleSheet} from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.lightTheme //colors.white,
    },

    hoshiStyle: {
        marginLeft: 10,
        marginRight: 10
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
        color: colors.black,
        margin: 5,
        fontSize: 15,
        textAlign: 'center'
    },

    //text used on forms
    textForm: {
        color: colors.black,
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
        color: colors.black,
        borderRadius: 4,
    },

    //disabled textinput style
    disabledTextInput: {
        width: 290,
        padding: 5,
        height: 40,
        borderColor: colors.darkOrange,
        borderWidth: 1,
        backgroundColor: colors.darkBackground,
        color: colors.black,
        borderRadius: 4,
    },

    //textinputBox style
    textInputBox: {  
        width: 290,
        padding: 5,
        height: 100,
        borderColor: colors.orange,
        borderWidth: 1,
        backgroundColor: colors.darkBackground,
        color: colors.black,
        borderRadius: 4,
    },

    //textinputBox disabled style
    textInputBoxDisabled: {  
        width: 290,
        padding: 5,
        height: 100,
        borderColor: colors.darkOrange,
        borderWidth: 1,
        backgroundColor: colors.darkBackground,
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
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 0.5,
        borderColor: colors.black,   
   },

    //text title
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center'
    },

    newTitle: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 14,
    },

    cardBackground: {
        borderRadius: 5,
        backgroundColor: colors.white,
        margin: 10,
        padding: 10,
        shadowColor: colors.black,
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 3,
    },

    cardItem: {
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 10,
        padding: 10,
        shadowColor: colors.black,
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 3,
    },

    itemTitle: {
        color: colors.blue,
        fontSize: 15,
        fontWeight: 'bold',
    },

    itemText: {
        color: colors.black,
    },

    //picker used in roll dices screen and name generator screen
    pickerStyle: {  
        marginLeft: 10,
        marginRight: 10,
        color: colors.black,
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