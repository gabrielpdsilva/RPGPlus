/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * version: 1.21.71
 * 
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/app/navigations/AuthStack';
import MainDrawer from './src/app/navigations/MainDrawer';
import firebase from './src/app/controller/FirebaseConfig';

//useful site about keep user logged in:
//https://rnfirebase.io/auth/usage

const App = () => {
    //initial state while firebase is connecting
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    });

    if (initializing) return null;

    return(

        <NavigationContainer>
            {
                user ? (<MainDrawer/>) : (<AuthStack/>)
            }
        </NavigationContainer>
    );
}

export default App;