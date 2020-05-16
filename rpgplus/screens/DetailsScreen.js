import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import CustomText from '../components/CustomText';

const DetailsScreen = ({navigation}) => {   
    return(
        <View style={styles.container}>
            <CustomText>
            RPG+ (RPGPlus) is a project made for tests and studies using React Native technology.
                You may see bugs, problems with styles, etc.
            </CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    }
});

export default DetailsScreen;