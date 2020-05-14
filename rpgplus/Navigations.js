
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SketchScreen from './screens/SketchScreen';
import NameGeneratorScreen from './screens/NameGeneratorScreen';
import TestScreen from './screens/TestScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export function MyDrawer() {
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