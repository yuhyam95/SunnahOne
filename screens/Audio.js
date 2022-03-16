import React from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES } from '../constants';

const imams = [
  {
    id: 1,
    name: "Sheikh Ja'afar Mahmud Adam",
    image: images.jaafar,
    categories: [ {
        name: "Ramadan Tafseer",
        year: [
          {
            name: "Ramadan Tafseer 2000",
            tracks: [
              {
                name: "Day 1",
              },
              {
                name: "Day 2",
              },
              {
                name: "Day 2",
              }
            ]
          },
          {
            name: " Ramadan Tafseer 2001",
            tracks: [
              {
                name: "Day 1",
              },
              {
                name: "Day 2",
              },
              {
                name: "Day 3",
              }
            ]
          }
        ] 
      },
      {
        name: "Hisnul Muslim",
        tracks: [
          {
            name: "Day 1",
            
          },
          {
            name: "Day 2", 
          },
          {
            name: "Day 3", 
          }
        ] 
      },
      {
        name: "Sahihul Bukhari",
        tracks: [
          {
            name: "Day 1",
            
          },
          {
            name: "Day 2", 
          },
          {
            name: "Day 3", 
          }
        ] 
      },
    ]
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
  },
  {
    id: 4,
    name: "Sheikh Ja'afar Mahmud Adam",
    image: images.jaafar
  },
  {
    id: 5,
    name: "Sheikh Muhammad Albani Zaria",
    image: images.albani
  },
  {
    id: 6,
    name: "Sheikh Umar Sani Rijiyar-Lemo",
    image: images.rijiyarlemo
  },
  {
    id: 7,
    name: "Sheikh Ja'afar Mahmud Adam",
    image: images.jaafar
  },
  {
    id: 8,
    name: "Sheikh Muhammad Albani Zaria",
    image: images.albani
  },
  {
    id: 9,
    name: "Sheikh Umar Sani Rijiyar-Lemo",
    image: images.rijiyarlemo
  }
]

const numColumns = 3;



export default function Audio({navigation}) {
  function renderImams() {
    const renderItem = ({ item, index }) => (
      
      <TouchableOpacity
          style={{
              width: 90,
              borderRadius: 40,
              // height: 80,
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            
          }}
          onPress={() => navigation.navigate("Imam Screen", {imam: item})}
      >     
                  <Image
                      source={item.image}                      
                      style={{
                        height: 90,
                        width: 90,
                        borderRadius: 45,
                        marginTop: 5,
                      }}
                  />
                  <Text style={{ ...FONTS.body6, color: COLORS.tealgreen, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
                                   
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
        }}
        >
        <Text style={{ marginLeft: SIZES.padding, marginTop: 20, color: COLORS.tealgreen, ...FONTS.h2 }}>Featured Imams</Text>
        
        <FlatList
            contentContainerStyle={{ alignItems: 'center', justifyContent:'space-between', }}
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
  
  return (
    <Screen>
      {renderImams()}
    </Screen>
  )
}
