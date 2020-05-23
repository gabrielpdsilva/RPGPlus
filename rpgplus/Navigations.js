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
import DrawerContent from './screens/DrawerContent';

import firebase from './controller/Firebase';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
      <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />
      <Stack.Screen name="RPG+" options={{headerShown: false}} component={MyDrawer} />
    </Stack.Navigator>
  );
}

/*initialRouteName="Home">*/

//<Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}> 
export function MyDrawer() {

  const user = firebase.auth().currentUser;

  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent
                                                name = {user.displayName}
                                                description = {user.email}
                                                sessions = {0}
                                                friends = {5}
                                                {... props}/>}>
      <Drawer.Screen name="Home" component={HomeScreen}/>    
      <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
      <Drawer.Screen name="Sketch" component={SketchScreen}/>
      <Drawer.Screen name="Details" component={DetailsScreen}/>
      <Drawer.Screen name="Test" component={TestScreen}/>
    </Drawer.Navigator>
  );
}