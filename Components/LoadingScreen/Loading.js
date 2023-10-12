import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import {Dimensions} from "react-native";

import {ThemeContext} from "../../Context/ThemeContext";

export default function Loading() {
   const {theme} = useContext(ThemeContext);
   const {width, height} = Dimensions.get("screen");

   //   STYLES
   const styles = StyleSheet.create({
      container: {
         flex: 1,
         alignItems: "center",
      },
      lottie: {
         width: width,
         height: height,
         backgroundColor: theme?.BackgroundColor,
         alignItems: "center",
      },
   });

   return (
      <>
         <View style={styles.container}>
            <LottieView
               style={styles.lottie}
               source={require("../../assets/Json/9582-liquid-4-dot-loader.json")}
               autoPlay
               loop
               speed={2}
            />
         </View>
      </>
   );
}
