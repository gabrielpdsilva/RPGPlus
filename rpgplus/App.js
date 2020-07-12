/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * version: 1.17.55
 * 
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/app/navigations/MyStack';
import MyDrawer from './src/app/navigations/MyDrawer';
import firebase from './src/app/controller/Firebase';

const App = () => {

    const user = firebase.auth().currentUser;

    return(

        <NavigationContainer>
            {
                user ? (<MyDrawer/>) : (<MyStack/>)
            }
        </NavigationContainer>
    );
}

export default App;