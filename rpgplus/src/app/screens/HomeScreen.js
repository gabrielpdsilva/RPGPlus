import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from '../styles/styles';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';

const HomeScreen = ({navigation}) => {

    const user = firebase.auth().currentUser;
    
    return(

        <View style={styles.container}>

            <CustomAppBar title="Home" subtitle=""/>

            <View style={styles.childContainer}>

                <Text style={styles.title}>Home</Text>

                <Text style={styles.text}>Welcome, {user.displayName}</Text>

            </View>
            
        </View>
    );
}

export default HomeScreen;