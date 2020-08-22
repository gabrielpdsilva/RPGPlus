import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ListDraftScreen from '../screens/ListDraftScreen';
import DraftModelScreen from '../screens/DraftModelScreen';

const Stack = createStackNavigator();

const DraftStack = () => {
    return (
        <Stack.Navigator initialRouteName="List Drafts">
            <Stack.Screen
                name="List Drafts"
                component={ListDraftScreen}
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