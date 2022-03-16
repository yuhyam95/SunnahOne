import React, {useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES } from '../constants';


export default function ImamScreen({navigation, route}) {
     const [ menuItems, setMenuItems ] = useState(null);
     const [selectedImam, setSelectedImam] = useState("");

    useEffect(() => {
      const imam = route.params;
      console.log(imam);
      setMenuItems(imam.categories);
      setSelectedImam(imam);
    }, []) 
 
 
    return (
    <View
    style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <Text>{selectedImam.name}</Text>
    </View>
  )
}
