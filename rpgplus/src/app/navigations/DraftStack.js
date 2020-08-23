import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import DraftListScreen from '../screens/DraftListScreen';
import DraftModelScreen from '../screens/DraftModelScreen';

const Stack = createStackNavigator();

const DraftStack = () => {
    return (
        <Stack.Navigator initialRouteName="List Drafts">
            <Stack.Screen
                name="List Drafts"
                component={DraftListScreen}
                options={{headerShown: false}}
            />
    
            <Stack.Screen
                name="Draft Model"
                component={DraftModelScreen}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}

export default DraftStack;