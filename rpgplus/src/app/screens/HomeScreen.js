import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import styles from '../styles/styles';
import CustomAppBar from '../components/CustomAppBar';

import firebase from '../controller/Firebase';

const HomeScreen = ({navigation}) => {
/*
    componentDidMount = () => {
        const {email} = firebase.auth().currentUser;
    }*/

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

      /*CONFIG OF FLOATING ACTION BUTTON

      <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => alert("ok")}
            style={styles.TouchableOpacityStyle}>
            <Image
                //We are making FAB using TouchableOpacity with an image
                //We are using online image here
                source={{
                    uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                }}
                //You can use you project image Example below
                //source={require('./images/float-add-icon.png')}
                style={styles.FloatingButtonStyle}
            />
        </TouchableOpacity>



        ************************stylesheet of the floating action button...************************

         TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
    
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },


      */


export default HomeScreen;