import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import {  ScpScreen, TempForecast, CropCalendar } from "../screens"
import { COLORS, FONTS, icons } from "../constants";
import SettingsNavigation from "./SettingsNavigation";
import NewsWarningsNavigation from './NewsWarningsNavigation';

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
                    backgroundColor: COLORS.primary,
                    borderTopColor: COLORS.primary,
                    height: 90
                }
            }}
        >
            <Tab.Screen
                name="SRP"
                component={ScpScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.scp}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>SRP</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Crop Calendar"
                component={CropCalendar}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.crop_calendar}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Crop Calendar</Text>
                        </View>
                    )
                }}
            />
          <Tab.Screen
                name="Temp Forecast"
                component={TempForecast}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.temp_forecast}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Temp Forecast</Text>
                        </View>
                    )
                }}
            />
          <Tab.Screen
                name="Warnings"
                component={NewsWarningsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.news_warnings}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.secondary : COLORS.white, ...FONTS.body6 }}>Warnings</Text>
                        </View>
                    )
                }}
            />
          <Tab.Screen
                name="Settings"
                component={SettingsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.settings}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.secondary : COLORS.white
                                }}
                            />
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