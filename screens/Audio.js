import React from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES } from '../constants';

const imams = [
  {
    id: 1,
    name: "Sheikh Ja'afar Mahmud Adam",
    image: images.jaafar
  },
  {
    id: 2,
    name: "Sheikh Muhammad Albani Zaria",
    image: images.albani
  },
  {
    id: 3,
    name: "Sheikh Umar Sani Rijiyar-Lemo",
    image: images.rijiyarlemo
  }
]

const numColumns = 3;

function renderImams() {
  const renderItem = ({ item, index }) => (
      <TouchableOpacity
          style={{
              width: 40,
              paddingVertical: SIZES.padding,
              paddingHorizontal: SIZES.padding,
              margin: SIZES.padding /4,
              borderRadius: 20,
              height: 40,
              backgroundColor: COLORS.white
          }}
          onPress={console.log(item)}
      >
          {/* Currency */}
          <View style={{ flexDirection: 'column' }}>
              <View>
                  {/* <Image
                      source={item.image}                      
                      style={{
                          marginTop: 5,
                      }}
                  /> */}
              </View>
              <View style={{ marginLeft: SIZES.base }}>
                  <Text style={{ ...FONTS.h2 }}>{item.name}</Text>               
              </View>
          </View>
      </TouchableOpacity>
  )
  
  return (
      <ScrollView>
      <View
      style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: "100%",
          top: '-10%'            
      }}
      >
      <Text style={{ marginLeft: SIZES.padding, marginTop: 70, color: COLORS.tealgreen, ...FONTS.h2 }}>Featured</Text>
      <FlatList
          contentContainerStyle={{ marginTop: SIZES.base, alignItems: 'center', justifyContent:'space-around', }}
          numColumns= {numColumns}
          data={imams}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          // horizontal
          // showsHorizontalScrollIndicator={false}
      />
      </View>
  </ScrollView>
  )
}


export default function Audio() {
  return (
    <Screen>
      {renderImams()}
    </Screen>
  )
}
