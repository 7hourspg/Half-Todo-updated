import {View, Text, StyleSheet, Dimensions} from "react-native";
import React from "react";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated, {
   runOnJS,
   useAnimatedGestureHandler,
   useAnimatedStyle,
   useSharedValue,
   withDecay,
   withDelay,
   withSpring,
   withTiming,
} from "react-native-reanimated";
// import
import Calender from "react-native-vector-icons/AntDesign";
import Clock from "react-native-vector-icons/MaterialCommunityIcons";
import Start from "react-native-vector-icons/Entypo";

const ListItem = ({title, simultaneousHandlers, onDismiss}) => {
   const {width: SCREEN_WIDTH, height: height} = Dimensions.get("screen");
   // console.log(SCREEN_WIDTH, "WIDTH");

   const TRANSLATE_X_THRESOLD = -SCREEN_WIDTH * 0.35;
   const LIST_ITEM_HEIGHT = 70;

   const translateX = useSharedValue(0);
   const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
   const marginBottom = useSharedValue(20);
   const context = useSharedValue({y: 0});

   const panGesture = useAnimatedGestureHandler({
      onStart: () => {
         context.value.y = translateX.value;
      },
      onCancel: () => {
         translateX.value = withTiming(0);
      },

      onActive: (e) => {
         //  if (e.translationX < 0) {
         translateX.value = context.value.y + e.translationX;
         // console.log("Active:",translateX.value);
         translateX.value = Math.min(translateX.value, 0);

         //  if(translateX.value<-100){
         //   translateX.value=withTiming(-100)

         //  }
         // console.log(Math.trunc(translateX.value));
      },
      onEnd: () => {
         // const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESOLD

         // if (shouldBeDismissed) {
         //   translateX.value = withTiming(-SCREEN_WIDTH);
         //   itemHeight.value = withTiming(0);
         //   marginBottom.value = withTiming(0,undefined,(isFinished) => {
         //     if(isFinished&&onDismiss){
         //       runOnJS(onDismiss)(title.id)
         //     }
         //   });
         // } else {
         //   translateX.value = withTiming(0);
         // }

         if (translateX.value > -80) {
            translateX.value = withTiming(0);
            // console.log("END:",translateX.value);
         } else if (translateX.value > -200 && translateX.value < -80) {
            translateX.value = withTiming(-110);
            // itemHeight.value = withTiming(0);
         } else {
            translateX.value = withTiming(-SCREEN_WIDTH);
            itemHeight.value = withDelay(100, withTiming(0));
            marginBottom.value = withTiming(0, undefined, (isFinished) => {
               if (isFinished && onDismiss) {
                  runOnJS(onDismiss)(title.id);
               }
            });
         }
      },
   });
   // if(Math.ceil(translateX.value)>-70){
   //      console.log("Kya Hall H rajiv")
   // }

   const transAnimation = useAnimatedStyle(() => {
      return {
         transform: [{translateX: translateX.value}],
      };
   });
   const opacityAnimation = useAnimatedStyle(() => {
      const opacity = withTiming(
         translateX.value < TRANSLATE_X_THRESOLD ? 0 : 1
      );
      return {
         opacity: opacity,
      };
   });
   const containerStyle = useAnimatedStyle(() => {
      return {
         height: itemHeight.value,
         marginBottom: marginBottom.value,
      };
   });

   return (
      <View>
         <PanGestureHandler
            simultaneousHandlers={simultaneousHandlers}
            onGestureEvent={panGesture}
         >
            <Animated.View
               style={[styles.container, transAnimation, containerStyle]}
            >
               <Text>{title.name}</Text>
            </Animated.View>
         </PanGestureHandler>
         <Animated.View style={[styles.actionContainer, opacityAnimation]}>
          <View style={{flex:2.1}}/>
            <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
               <Start name="star-outlined" size={30} color="white"  />
               <Calender name="calendar" size={30} color="white" />
               <Clock name="clock-outline" size={30} color="white" />
            </View>
         </Animated.View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "green",
      width: 350,
      // height: 70,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      zIndex: 1,
      // marginBottom:20
   },
   actionContainer: {
      backgroundColor: "red",
      width: 350,
      height: 70,
      alignItems: "end",
      justifyContent: "space-evenly",
      borderRadius: 10,
      position: "absolute",
      flexDirection: "row",
   },
});

export default ListItem;
