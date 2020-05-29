import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SketchScreen from './screens/SketchScreen';
import NameGeneratorScreen from './screens/NameGeneratorScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PreferencesScreen from './screens/PreferencesScreen';
import DrawerContent from './screens/DrawerContent';
import RollDices from './screens/RollDicesScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ListSketchScreen from './screens/ListSketchScreen';

import firebase from './controller/Firebase';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
                headerShown: true,
                headerStyle: {backgroundColor: '#f75605'},
                headerTintColor: '#fff',
                }}/>

      <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
                headerShown: true,
                headerStyle: {backgroundColor: '#f75605'},
                headerTintColor: '#fff',
                }}/>

<Stack.Screen
      name="Forgot Password"
      component={ForgotPasswordScreen}
      options={{
                headerShown: true,
                headerStyle: {backgroundColor: '#f75605'},
                headerTintColor: '#fff',
                }}/>

      <Stack.Screen
      name="RPG+"
      component={MyDrawer}
      options={{
                headerShown: false,
                headerLeft: null,
                headerStyle: {backgroundColor: '#f75605'},
                headerTintColor: '#fff',
                }}/>
    </Stack.Navigator>
  );
}

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
      <Drawer.Screen name="Roll Dices" component={RollDices}/>
      <Drawer.Screen name="Sketch" component={SketchScreen}/>
      <Drawer.Screen name="Details" component={DetailsScreen}/>
      <Drawer.Screen name="List Sketch" component={ListSketchScreen}/>
      <Drawer.Screen name="Preferences" component={PreferencesScreen}/>
    </Drawer.Navigator>
  );
}

//about the options of the screen:

/*
headerShown -> if true, it will show the appbar
headerLeft -> hides the back button

headerTitleStyle: {
  fontWeight: 'bold', -> changes the style of the title of the appbar to bold style
}

*/

/*initialRouteName="Home">*/

//<Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}> 