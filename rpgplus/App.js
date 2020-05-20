/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.3.3
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MyDrawer, MyStack} from './Navigations';

//install firebase:
//expo install firebase
//https://docs.expo.io/guides/using-firebase/

import * as firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9b3MyUCSlwU1X9IQNLnmYhT1BUQi6HBk",
  authDomain: "rpgplus-1df5e.firebaseapp.com",
  databaseURL: "https://rpgplus-1df5e.firebaseio.com",
  projectId: "rpgplus-1df5e",
  storageBucket: "rpgplus-1df5e.appspot.com",
  messagingSenderId: "517305234060",
  appId: "1:517305234060:web:a2a2f1c160eff9bfa1c1a9"
};
// Initialize Firebase


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let isLoggedIn = false;

const App = () => {

  return(

    <NavigationContainer>
      {
        isLoggedIn ? (<MyDrawer/>) : (<MyStack/>)
      }
    </NavigationContainer>
     
  );
}

export default App;