import {StyleSheet} from 'react-native';

import colors from './colors';
import { color } from 'react-native-reanimated';

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
    textinput: {  
        width: 290,
        padding: 5,
        margin: 5,
        height: 40,
        borderColor: colors.black,
        borderWidth: 1,
        backgroundColor: colors.darkContainer,
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
        color: colors.white,  
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
        backgroundColor: colors.orange,
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
        width: 280,
        padding: 10,
        margin: 5,
        backgroundColor: colors.orange,
        borderRadius: 25
    },

    /**********************
     * drawerContent style*
     **********************/
    drawerContent: {
        flex: 1,
    },
    
    draweUserInfoSection: {
        paddingLeft: 20,
        //backgroundColor: 'red',
    },
    
    drawerTitle: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white',
    },

    drawerCaption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
        
    },

    drawerRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    drawerParagraph: {
        fontWeight: 'bold',
        marginRight: 3,
        color: 'red',    
    },

    drawerSection: {
        marginTop: 15,
    },

    drawerBottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        color: 'red',
    },
    drawerPreference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    drawerSubmenuTitle: {
        marginLeft: 15,
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white',
    },
    /**********************
     * drawerContent style ends here*
     **********************/
});

export default styles;