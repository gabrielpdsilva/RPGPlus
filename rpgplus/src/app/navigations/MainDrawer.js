/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DraftCreateScreen from '../screens/DraftCreateScreen';
import NameGeneratorScreen from '../screens/NameGeneratorScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import DrawerContent from '../components/DrawerContent';
import RollDices from '../screens/RollDicesScreen';
import DraftStack from './DraftStack';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {

    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>

            <Drawer.Screen name="Home" component={HomeScreen}/>    
            <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
            <Drawer.Screen name="Roll Dices" component={RollDices}/>
            <Drawer.Screen name="Create Draft" component={DraftCreateScreen}/>
            <Drawer.Screen name="Preferences" component={PreferencesScreen}/>
            <Drawer.Screen name="Draft Stack" component={DraftStack}/>

        </Drawer.Navigator>
    );
}

export default MainDrawer;