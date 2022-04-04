import ReadMore from '@fawazahmed/react-native-read-more';
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
     const [imamBiography, setImamBiography] = useState("");

    useEffect(() => {
      const imam = route.params;
      setMenuItems(imam.imam.categories)
      setSelectedImam(imam);
      setImamBiography(imam.imam.biography)
      
    }, []) 
 

    function renderBiography() {
      return (
       
       
        <View
        style={{
        alignItems: 'center',
        justifyContent: 'center'
           }}
      >
        <View
        style={{
        width: '95%',
        marginVertical: scale(10),
        paddingVertical: scale(10),
        // margin: SIZES.padding /4,
        borderRadius: scale(10),
        backgroundColor: COLORS.lightGray1
           }}
      >

      <ReadMore numberOfLines={3} seeMoreStyle={{color: COLORS.green}} seeLessStyle={{color: COLORS.green}} seeLessText="Read Less" seeMoreText="Read More"
         style={{ color: COLORS.tealgreen, ...FONTS.body4, textAlign: "justify" }}>
          {imamBiography}
      </ReadMore>
      </View>
      </View>
      )
      
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
        <Screen style={{backgroundColor: COLORS.white}}>
          <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
          }}>
          {renderBiography()}
          {renderCategories()}
          </View>
        </Screen>
      )
    }
    