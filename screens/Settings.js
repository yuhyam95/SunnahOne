import React from 'react'
import {View, Text } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Settings() {
  return (
    <View style={{flex: 1}}>
        <Text style={{color: COLORS.teal}}>
            Settings Screen
        </Text>
    </View>
  )
}
