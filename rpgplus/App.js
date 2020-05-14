/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.3.1
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SketchScreen from './screens/SketchScreen';
import NameGeneratorScreen from './screens/NameGeneratorScreen';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>    
      <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
      <Drawer.Screen name="Sketch" component={SketchScreen}/>
      <Drawer.Screen name="Details" component={DetailsScreen}/>
      <Drawer.Screen name="Test" component={TestScreen}/>
    </Drawer.Navigator>
  );
}

/*
export default function App() {
  return (
    <Navigator/>
  );
}*/
const App = () => {

  let isLogged = false;

  if(isLogged){
    return(
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    );
  }else{
    return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
  }
}

export default App;