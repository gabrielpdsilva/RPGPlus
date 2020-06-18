import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import MyDrawer from './MyDrawer';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}} //the default app bar won't show
            />
    
            <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
            />
    
            <Stack.Screen
            name="Forgot Password"
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
            />
    
            <Stack.Screen
            name="RPG+"
            component={MyDrawer}
            options={{headerShown: false}}
            />  
        </Stack.Navigator>
    );
}

export default MyStack;