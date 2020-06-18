import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CreateDraftScreen from '../screens/CreateDraftScreen';
import NameGeneratorScreen from '../screens/NameGeneratorScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import DrawerContent from '../components/DrawerContent';
import RollDices from '../screens/RollDicesScreen';
import ListDraftScreen from '../screens/ListDraftScreen';
import DraftModelScreen from '../screens/DraftModelScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>

            <Drawer.Screen name="Home" component={HomeScreen}/>    
            <Drawer.Screen name="Name Generator" component={NameGeneratorScreen}/>
            <Drawer.Screen name="Roll Dices" component={RollDices}/>
            <Drawer.Screen name="Create Draft" component={CreateDraftScreen}/>
            <Drawer.Screen name="Details" component={DetailsScreen}/>
            <Drawer.Screen name="List Drafts" component={ListDraftScreen}/>
            <Drawer.Screen name="Preferences" component={PreferencesScreen}/>
            <Drawer.Screen name="Draft Model" component={DraftModelScreen}/>
  
        </Drawer.Navigator>
    );
}

export default MyDrawer;