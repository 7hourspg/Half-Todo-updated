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
   withTiming,
} from "react-native-reanimated";

const BottomSheet = ({height, setShowTextInput}) => {
   const {height: SCREEN_HEIGHT, width} = Dimensions.get("screen");

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
            translateY.value = withTiming(-SCREEN_HEIGHT + 160);
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
      translateY.value = withTiming(-SCREEN_HEIGHT + 160);
   }, []);

   return (
      <GestureHandlerRootView style={{flex: 1, width: width}}>
         <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, bottomSheetStyle]}>
               <Text>BottomSheet</Text>
            </Animated.View>
         </GestureDetector>
      </GestureHandlerRootView>
   );
};

const {height, width} = Dimensions.get("screen");

const styles = StyleSheet.create({
   container: {
      height: height,
      backgroundColor: "grey",
      width: width,
      position: "absolute",
      top: 0,
      borderRadius: 20,
      alignItems: "center",
   },
});

export default BottomSheet;
