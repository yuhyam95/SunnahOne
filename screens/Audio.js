import React, {useEffect} from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity, LogBox } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES, dummyData } from '../constants';
import { scale } from 'react-native-size-matters'


const numColumns = 3;



export default function Audio({navigation}) {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])


  function renderImams() {
    const renderItem = ({ item, index }) => (
      
      <TouchableOpacity
          style={{
              width: 90,
              //borderRadius: 40,
               height: 120,
               margin: scale(18),
              alignItems: 'center',
              justifyContent: 'center',
            
          }}
          onPress={() => navigation.navigate("Imam Screen", {imam: item})}
      >     
      <View
            style={{
              width: scale(90),
              borderRadius: scale(45),
              height: scale(90),
              margin: scale(10),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white
            
          }}
          
          >
                  <Image
                      source={item.image}                      
                      style={{
                        height: scale(100),
                        width: scale(100),
                        borderRadius: scale(50),
                        marginTop: scale(5),
                      }}
                  />
                  </View>
                  <View
                        style={{
                          width: scale(100),
                          alignItems: 'center',
                          justifyContent: 'center',
                          
                      }}
          
                    >
                  <Text style={{ ...FONTS.body5, color: COLORS.tealgreen, fontWeight: "900", textAlign: "center" }}>{item.name}</Text>
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
        }}
        >
        <Text style={{ marginLeft: SIZES.padding, marginTop: scale(20), color: COLORS.tealgreen, ...FONTS.h2 }}>Featured Imams</Text>
        
        <FlatList
            contentContainerStyle={{ alignItems: 'center', justifyContent:'space-between', }}
            numColumns= {numColumns}
            data={dummyData.imams}
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
