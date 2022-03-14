import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';
import ContactUs from '../screens/ContactUs';
import AboutSCP from '../screens/AboutSCP';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="About SCP" component={AboutSCP} />
    </Stack.Navigator>
)

export default AccountNavigator;