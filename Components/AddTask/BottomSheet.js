import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   TextInput,
   Keyboard,
} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {
   Gesture,
   GestureDetector,
   GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
   runOnJS,
   useAnimatedStyle,
   useSharedValue,
   withSpring,
   withTiming,
} from "react-native-reanimated";
import SelectDropdown from "react-native-select-dropdown";
import BottomSheetInnerContainer from "./BottomSheetInnerContainer";
import {ThemeContext} from "../../Context/ThemeContext";

const BottomSheet = ({setShowTextInput}) => {
   const {theme} = useContext(ThemeContext);
   const {height: SCREEN_HEIGHT, width} = Dimensions.get("window");
   // const [keyboardStatus, setKeyboardStatus] = useState("");

   const shouldVisible = (arg) => {
      setTimeout(() => {
         setShowTextInput(arg);
      }, 300);
   };

   // Pan Gesture Handler

   const translateY = useSharedValue(0);

   const context = useSharedValue({y: 0});

   const gesture = Gesture.Pan()
      .onStart(() => {
         context.value.y = translateY.value;
      })
      .onUpdate((event) => {
         translateY.value = event.translationY + context.value.y;

         translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 360);
      })
      .onEnd(() => {
         if (translateY.value > -SCREEN_HEIGHT / 1) {
            translateY.value = withTiming(0);

            runOnJS(shouldVisible)(false);
         } else {
            translateY.value = withSpring(-SCREEN_HEIGHT + 160);
         }
      });

   const bottomSheetStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateY: translateY.value,
            },
         ],
      };
   });

   useEffect(() => {
      translateY.value = withSpring(-SCREEN_HEIGHT + 560);
   }, []);


   // STYLES

   const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
   container: {
      height: height,
      backgroundColor: theme?.BottomSheetColorBG,
      width: width,
      position: "absolute",
      top: 0,
      borderRadius: 20,
      alignItems: "center",
   },
   line: {
      width: 100,
      height: 5,
      backgroundColor: theme?.SecondaryColor,
      borderRadius: 10,
      marginTop: 10,
   },

   innerContainer: {
      marginTop: 20,
   },
});

   return (
      <GestureHandlerRootView style={{flex: 1, width: width}}>
         <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, bottomSheetStyle]}>
               <View style={styles.line} />
               <BottomSheetInnerContainer />
            </Animated.View>
         </GestureDetector>
      </GestureHandlerRootView>
   );
};



export default BottomSheet;
