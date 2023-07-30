import {View, Text, StyleSheet, Dimensions} from "react-native";
import React, {useEffect} from "react";
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

const BottomSheet = ({setShowTextInput}) => {
   const {height: SCREEN_HEIGHT, width} = Dimensions.get("window");

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

         translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 160);
      })
      .onEnd(() => {
         if (translateY.value > -SCREEN_HEIGHT / 1.5) {
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
      translateY.value = withSpring(-SCREEN_HEIGHT + 160);
   }, []);

   return (
      <GestureHandlerRootView style={{flex: 1, width: width}}>
         <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, bottomSheetStyle]}>
               <View style={styles.line} />
            </Animated.View>
         </GestureDetector>
      </GestureHandlerRootView>
   );
};

const {height, width} = Dimensions.get("screen");

const styles = StyleSheet.create({
   container: {
      height: height,
      backgroundColor: "#3F2E3E",
      width: width,
      position: "absolute",
      top: 0,
      borderRadius: 20,
      alignItems: "center",
   },
   line: {
      width: 100,
      height: 5,
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 10,
   },
});

export default BottomSheet;
