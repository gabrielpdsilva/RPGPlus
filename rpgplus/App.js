/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.3.8
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MyDrawer, MyStack} from './Navigations';

let isLoggedIn = false;

const App = () => {

/*
  export default class Loading extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'SignUp')
      })
    }*/
  return(

    <NavigationContainer>
      {
        isLoggedIn ? (<MyDrawer/>) : (<MyStack/>)
      }
    </NavigationContainer>
     
  );
}

export default App;