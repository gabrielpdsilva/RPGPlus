import React from 'react';
import {
    Text,
    View,
    Image
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

            <View style={{flex: 1, justifyContent:'center', alignItems: 'center', marginTop: 10}}>

                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={{ width: 200, height: 100 }}
                />

                <Text style={styles.title}>{translate('homeTitle')} {user.displayName}</Text>

                <Text style={styles.text}>{translate('homeSubtitle')}</Text>

            </View>
            
        </View>
    );
}

export default HomeScreen;