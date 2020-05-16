import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomText from '../components/CustomText';
import CustomTitle from '../components/CustomTitle';

const HomeScreen = ({navigation}) => {   
    
    return(
        <View style={styles.container}>
            <CustomTitle>Home</CustomTitle>
            <CustomText>Hm...</CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d3042',
    },
});

export default HomeScreen;