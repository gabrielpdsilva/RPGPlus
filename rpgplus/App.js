/*
author: G.P.
RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
version: 1.3.1
*/

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SketchScreen from './screens/SketchScreen';
import NameGeneratorScreen from './screens/NameGeneratorScreen';
import TestScreen from './screens/TestScreen';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/*
export default function App() {
  return (
    <Navigator/>
  );
}*/

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        
        <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
        <Drawer.Screen name="Sketch" component={SketchScreen}/>
        <Drawer.Screen name="Details" component={DetailsScreen}/>
        <Drawer.Screen name="Test" component={TestScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;