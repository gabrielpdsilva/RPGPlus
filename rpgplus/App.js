/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.12.32
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MyDrawer, MyStack} from './Navigations';

import firebase from './controller/Firebase';

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

/*
  export default class Loading extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'SignUp')
      })
    }*/