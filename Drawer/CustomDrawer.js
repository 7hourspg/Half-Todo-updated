import {
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import {View, ScrollView} from "react-native";
import {ThemeContext} from "../Context/ThemeContext";
import LottieView from "lottie-react-native";

function CustomDrawer(props) {
   const {theme} = React.useContext(ThemeContext);
   return (
      <ScrollView
         style={{flex: 1, backgroundColor: `${theme?.BackgroundColor}`}}
      >
         <View style={{backgroundColor: theme?.BackgroundColor, height: 150}}>
            <LottieView
               style={{height: 150, alignSelf: "center"}}
               source={require("../assets/Json/Girl.json")}
               autoPlay
               loop
               speed={2}
            />
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
