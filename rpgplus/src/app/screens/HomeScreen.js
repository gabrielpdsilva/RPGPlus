import React from 'react';
import {
    Text,
    View,TouchableOpacity
} from 'react-native';

import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';

const HomeScreen = ({navigation}) => {

    const user = firebase.auth().currentUser;
    
    return(

        <View style={styles.container}>

            <CustomAppBar title="Home" subtitle="" navigation={navigation}/>

            <View style={styles.childContainer}>

                <Text style={styles.title}>Welcome, {user.displayName}</Text>

                <Text style={styles.text}>Thank you for using RPG+! Please, select the menu at the upper left corner and check out all the available tools.</Text>

            </View>
            
        </View>
    );
}

export default HomeScreen;