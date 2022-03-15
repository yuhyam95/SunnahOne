import React from 'react'
import {View, Text } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Read() {
  return (
    <View style={{flex: 1}}>
        <Text style={{color: COLORS.teal}}>
            Read Screen
        </Text>
    </View>
  )
}
