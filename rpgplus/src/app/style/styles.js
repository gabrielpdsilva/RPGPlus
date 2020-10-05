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

    inputForm: {
        marginBottom: 25,
        marginHorizontal: 30,
    },

    inputTitle: {
        color: colors.white,
        fontSize: 13,
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
        textAlign: 'center'
    },

    preferencesTitle: {
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
        color: colors.slateBlue,
        fontSize: 15,
        fontWeight: 'bold',
    },

    itemText: {
        color: colors.black,
    },

    //picker used in roll dices screen and name generator screen
    pickerStyle: {  
        marginLeft: 20,
        marginRight: 10,
        color: colors.black,
        //backgroundColor: 'red'
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
        backgroundColor: colors.slateBlue,
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