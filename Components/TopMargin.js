import { View, Text, StatusBar } from 'react-native';
import React,{useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const TopMargin = () => {
  const{theme}=useContext(ThemeContext)
  // console.log(StatusBar.currentHeight);
  return (
    <View
      style={{ height: StatusBar.currentHeight, }}
    ></View>
  );
};

export default TopMargin;
