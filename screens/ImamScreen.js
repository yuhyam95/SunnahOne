import React, {useState, useEffect} from 'react'
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import { COLORS, FONTS, images, SIZES } from '../constants';

const numColumns = 3;

export default function ImamScreen({navigation, route}) {
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
        width: 480,
        paddingVertical: 50,
        paddingHorizontal: 100,
        margin: SIZES.padding /4,
        borderRadius: 10,
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
              width: 90,
              borderRadius: 45,
              height: 90,
              margin: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white
            
          }}
          
          >
                      <Image
                          source={images.quranicon}                      
                          style={{
                            height: 90,
                            width: 90,
                            borderRadius: 45,
                            marginTop: 5,
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
    