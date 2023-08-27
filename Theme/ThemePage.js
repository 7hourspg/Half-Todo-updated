import {View} from "react-native";
import React, {useContext} from "react";
import TopBckBtn from "./TopBckBtn";
import DisplayColor from "./DisplayColor";
import {ThemeContext} from "../Context/ThemeContext";

const ThemePage = ({navigation}) => {
   const {theme} = useContext(ThemeContext);
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: theme?.BackgroundColor,
         }}
      >
         <TopBckBtn navigation={navigation} />
         <DisplayColor />
      </View>
   );
};

export default ThemePage;
