import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsWarnings from '../screens/NewsWarnings';
import MalariaMapScreen from '../screens/MalariaMapScreen';
import MeningitisMapScreen from '../screens/MeningitisMapScreen'
import AlertScreen from '../screens/AlertScreen'

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="News Warnings" component={NewsWarnings} options={{headerShown: false}}/>
        <Stack.Screen name="Malaria Vigilance Map" component={MalariaMapScreen}/>
        <Stack.Screen name="Meningitis Vigilance Map" component={MeningitisMapScreen}/>
        <Stack.Screen name="Alert" component={AlertScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;