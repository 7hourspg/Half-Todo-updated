import { View, Text } from 'react-native'
import React from 'react'
import TopBckBtn from './TopBckBtn'
import DisplayColor from './DisplayColor'
import Scenry from './Scenry'
const ThemePage = ({navigation}) => {

  return (
    <View style={{flex:1,
      backgroundColor:"black",
      // paddingHorizontal:20,
      // display:"flex",
      // flexDirection:"column",
      
    }}>
     <TopBckBtn navigation={navigation}/>
     <DisplayColor/>
     <Scenry/>
    </View>
  )
}

export default ThemePage