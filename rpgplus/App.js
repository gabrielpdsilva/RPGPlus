/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * version: 1.21.70
 * 
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/app/navigations/MyStack';
import MyDrawer from './src/app/navigations/MyDrawer';
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
                user ? (<MyDrawer/>) : (<MyStack/>)
            }
        </NavigationContainer>
    );
}

export default App;