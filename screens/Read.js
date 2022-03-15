import React from 'react'
import {View, Text } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS } from '../constants/theme';

export default function Read() {
  return (
    <Screen>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: COLORS.teal}}>
            Read Screen
        </Text>
    </View>
    </Screen>
  )
}
