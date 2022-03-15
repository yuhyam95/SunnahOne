import React from 'react'
import {View, Text } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

export default function Donate() {
  return (
    <View style={{flex: 1}}>
        <Text style={{color: COLORS.teal}}>
            Donate Screen
        </Text>
    </View>
  )
}
