import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/FirebaseConfig';
import {translate} from '../locales/localeConfig';
const HomeScreen = ({navigation}) => {

    const user = firebase.auth().currentUser;
    
    return(

        <View style={styles.container}>

            <CustomAppBar title={translate('appBarHome')} subtitle="" navigation={navigation}/>

            <View style={styles.childContainer}>

                <Text style={styles.title}>{translate('homeTitle')} {user.displayName}</Text>

                <Text style={styles.text}>{translate('homeSubtitle')}</Text>

            </View>
            
        </View>
    );
}

export default HomeScreen;