import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../styles/styles';
import CustomAppBar from '../components/CustomAppBar';

const DetailsScreen = ({navigation}) => {   
    return(
        <View style={styles.container}>

            <CustomAppBar title="Details"/>

            <View style={styles.childContainer}>
        
                <Text style={styles.text}>
                    RPG+ (RPGPlus) is a project made for tests and studies using React Native technology. You may see bugs, problems with styles, etc.
                </Text>

            </View>
        </View>
    );
}

export default DetailsScreen;