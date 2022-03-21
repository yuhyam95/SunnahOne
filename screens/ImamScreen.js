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
      setSelectedImam(imam);
      console.log(selectedImam.imam.categories)
    }, []) 
 
    function renderCategories() {
        const renderItem = ({ item, index }) => (
          
          <TouchableOpacity
              style={{
                  width: 90,
                  borderRadius: 40,
                  // height: 80,
                  margin: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: COLORS.white
                
              }}
              onPress={() => navigation.navigate("Imam Screen", {imam: item})}
          >     
                      <Image
                          source={images.quranicon}                      
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            marginTop: 5,
                            tintColor: COLORS.tealgreen
                          }}
                      />
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
            <Text style={{ marginLeft: SIZES.padding, color: COLORS.tealgreen, ...FONTS.h2 }}>Categories</Text>
            
            <FlatList
                contentContainerStyle={{ alignItems: 'center', justifyContent:'space-between', }}
                numColumns= {numColumns}
                data={selectedImam.imam.categories}
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
          {renderCategories()}
        </Screen>
      )
    }
    