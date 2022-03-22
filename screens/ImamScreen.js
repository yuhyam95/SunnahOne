import React, {useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity, LogBox } from 'react-native';
import { scale } from 'react-native-size-matters';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES } from '../constants';

const numColumns = 3;

export default function ImamScreen({navigation, route}) {



useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

     const [ menuItems, setMenuItems ] = useState(null);
     const [selectedImam, setSelectedImam] = useState("");

    useEffect(() => {
      const imam = route.params;
      setMenuItems(imam.imam.categories)
      setSelectedImam(imam);

    }, []) 
 

    function renderBiography() {
      <View
      style={{
        width: scale(480),
        paddingVertical: scale(50),
        paddingHorizontal: scale(100),
        margin: SIZES.padding /4,
        borderRadius: scale(10),
        backgroundColor: COLORS.red
    }}
      >
                    <Text style={{ marginLeft: SIZES.padding, color: COLORS.tealgreen, ...FONTS.h3 }}>Some Bio</Text>        
      </View>
    }


    function renderCategories() {
        const renderItem = ({ item, index }) => (
          
          <TouchableOpacity
              style={{
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
                          source={images.quranicon}                      
                          style={{
                            height: scale(90),
                            width: scale(90),
                            borderRadius: scale(45),
                            marginTop: scale(5),
                            tintColor: COLORS.tealgreen
                          }}
                      />
          </View>
                      <Text style={{ ...FONTS.body5, color: COLORS.tealgreen, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
                                       
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
            <Text style={{ marginLeft: SIZES.padding, color: COLORS.tealgreen, ...FONTS.h3 }}>Categories</Text>
            
            <FlatList
                contentContainerStyle={{ alignItems: 'center', justifyContent:'space-between', }}
                numColumns= {numColumns}
                data={menuItems}
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
          {renderBiography()}
          {renderCategories()}
        </Screen>
      )
    }
    