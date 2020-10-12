/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import styles from '../style/styles';
import CustomAppBar from '../components/CustomAppBar';

import {translate} from '../locales/localeConfig';

const HomeScreen = ({navigation}) => {
    
    return(

        <View style={styles.container}>

            <CustomAppBar title={translate('appBarHome')} subtitle="" navigation={navigation}/>

            <View style={{flex: 1, justifyContent:'center', alignItems: 'center', marginTop: 10}}>

                <Image
                    source={require('../../../assets/images/logo.png')}
                    style={{ width: 200, height: 100 }}
                />

                <Text style={styles.title}>{translate('homeTitle')}</Text>

                <Text style={styles.text}>{translate('homeSubtitle')}</Text>

            </View>
            
        </View>
    );
}

export default HomeScreen;