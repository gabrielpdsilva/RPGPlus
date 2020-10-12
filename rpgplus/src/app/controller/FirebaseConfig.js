/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

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


//This condition is made to avoid calling the function more than once
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;