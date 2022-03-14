import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TempForecast from '../screens/TempForecast';
import AlertScreen from '../screens/AlertScreen'

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Temp Forecast" component={TempForecast} options={{headerShown: false}}/>
        <Stack.Screen name="Alert" component={AlertScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;