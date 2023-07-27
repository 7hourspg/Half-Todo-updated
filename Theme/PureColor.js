import { View, Text } from 'react-native'
import React from 'react'
import TopBckBtn from './TopBckBtn'
import DisplayColor from './DisplayColor'
import Scenry from './Scenry'
const PureColor = ({navigation}) => {

  return (
    <View style={{flex:1}}>
     <TopBckBtn navigation={navigation}/>
     <DisplayColor/>
     <Scenry/>
    </View>
  )
}

export default PureColor