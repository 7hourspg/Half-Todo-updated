import React from "react";
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");
export default function NothingToShow() {
   return (
      <>
         <View style={styles.container}>
            <LottieView
               style={styles.lottie}
               source={require("../../assets/Json/CatPlaying.json")}
               autoPlay
               loop
               speed={2}
            />
         </View>
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   lottie: {
      width: width / 2,
      height: height / 2,
      alignItems: "center",
   },
});
