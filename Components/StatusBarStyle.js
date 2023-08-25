import {View, StatusBar} from "react-native";
import React,{useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";

const StatusBarStyle = () => {
  const {theme} = useContext(ThemeContext);

  return (
      <View style={{height: StatusBar.currentHeight}}>
         <StatusBar
            translucent={true}
            animated={true}
            backgroundColor={theme?.BackgroundColor}
            barStyle={theme?.BarStyle}
         />
      </View>
   );
};

export default StatusBarStyle;
