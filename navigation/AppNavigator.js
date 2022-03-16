import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import {  Audio, Read, Donate, Settings, ImamScreen  } from "../screens"
import { COLORS, FONTS, icons } from "../constants";
import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


const Stack = createStackNavigator();

const AudioNavigator = () => {
    return(
    <Stack.Navigator>
    <Stack.Screen name="Audio" component={Audio} options={{headerShown: false}}/>
    <Stack.Screen name="Imam Screen" component={ImamScreen} options={({ route }) => ({ title: route.params.name })}/>
    </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.tealgreen,
                    //borderTopColor: COLORS.teal,
                    height: 90
                }
            }}
        >
            <Tab.Screen
                name="Audio"
                component={AudioNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image
                                source={icons.scp}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            /> */}
                            <AntDesign name="play" size={36} color={COLORS.white} />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Audio</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Read"
                component={Read}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image
                                source={icons.crop_calendar}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            /> */}
                            <FontAwesome5 name="book" size={36} color={COLORS.white} />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Read</Text>
                        </View>
                    )
                }}
            />
          <Tab.Screen
                name="Donate"
                component={Donate}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image
                                source={icons.temp_forecast}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            /> */}
                            <MaterialCommunityIcons name="charity" size={36} color={COLORS.white} />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Donate</Text>
                        </View>
                    )
                }}
            />
          
          <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Image
                                source={icons.settings}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            /> */}
                            <Ionicons name="settings" size={36} color={COLORS.white} />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Settings</Text>
                        </View>
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default AppNavigator;