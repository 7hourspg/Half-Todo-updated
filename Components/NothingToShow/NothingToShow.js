import React,{useContext} from "react";
import {StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";
import {Dimensions} from "react-native";

// import {ThemeContext} from "../Context/ThemeContext";

const {width, height} = Dimensions.get("screen");

export default function NothingToShow() {
//    const {isLoading} = useContext(ThemeContext);

  //  console.log(isLoading);

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
     //  height: height,
     //  width: width,
      justifyContent: "center",
   },
   lottie: {
      width: width/2,
      height: height/2,
     //  backgroundColor: "black",
      alignItems: "center",
   },
});
