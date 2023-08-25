import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ThemeContext } from '../Context/ThemeContext';


function CustomDrawer(props) {
  const {theme}=React.useContext(ThemeContext)
  return (
    <ScrollView   style={{ flex: 1, backgroundColor: `${theme?.BackgroundColor}` }}>
    
      <View style={{ backgroundColor: '#8EC3B0', height: 150 }} >
      <Image style={{width:'100%',height:150}} source={{uri:'https://assets.capitalfm.com/2020/28/katherine-langford-1594918637-view-0.jpg'}}/>
      </View>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </ScrollView>
  );
}
export default CustomDrawer;
