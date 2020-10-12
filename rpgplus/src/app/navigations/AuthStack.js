/**
 * 
 * author: G.P.
 * RPG+ (RPGPlus) is a project made for tests and studies using React Native technology
 * 
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

const AuthStack = () => {
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

        </Stack.Navigator>
    );
}

export default AuthStack;