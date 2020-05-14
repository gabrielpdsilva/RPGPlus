/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.3.2
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MyDrawer, MyStack} from './Navigations';


let isLoggedIn = true;

const App = () => {

  return(

    <NavigationContainer>
      {
        isLoggedIn ? (
          <MyDrawer/>

        ) : (
          <MyStack/>
        )
      }
    </NavigationContainer>
     
  );
}

export default App;