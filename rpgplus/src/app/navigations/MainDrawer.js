import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import CreateDraftScreen from '../screens/CreateDraftScreen';
import NameGeneratorScreen from '../screens/NameGeneratorScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import DrawerContent from '../components/DrawerContent';
import RollDices from '../screens/RollDicesScreen';
import ListDraftScreen from '../screens/ListDraftScreen';
import DraftModelScreen from '../screens/DraftModelScreen';
import DraftStack from './DraftStack';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {

    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>

            <Drawer.Screen name="Home" component={HomeScreen}/>    
            <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
            <Drawer.Screen name="Roll Dices" component={RollDices}/>
            <Drawer.Screen name="Create Draft" component={CreateDraftScreen}/>
            <Drawer.Screen name="Preferences" component={PreferencesScreen}/>
            
            <Drawer.Screen name="Draft Stack" component={DraftStack}/>


        </Drawer.Navigator>
    );
}

export default MainDrawer;