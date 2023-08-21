import {View, Text, StyleSheet, Dimensions} from "react-native";
import React,{useContext} from "react";
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
import Star from "react-native-vector-icons/Entypo";
import Notibell from "react-native-vector-icons/Ionicons";
import { DataContext } from "../Context/DataContext";

const ListItem = ({taskData, simultaneousHandlers}) => {
   // console.log(taskData, "DATA FROM LIST ITEM")
   const {onDismiss} = useContext(DataContext)
   // console.log(taskData, "DATA FROM LIST ITEM");
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
         //       runOnJS(onDismiss)(taskData.id)
         //     }
         //   });
         // } else {
         //   translateX.value = withTiming(0);
         // }

         if (translateX.value > -110) {
            translateX.value = withTiming(0);
            // console.log("END:",translateX.value);
         } else if (translateX.value > -200 && translateX.value < -50) {
            translateX.value = withTiming(-110);
            // itemHeight.value = withTiming(0);
         } else {
            translateX.value = withTiming(-SCREEN_WIDTH);
            itemHeight.value = withDelay(100, withTiming(0));
            marginBottom.value = withTiming(0, undefined, (isFinished) => {
               if (isFinished && onDismiss) {
                  runOnJS(onDismiss)(taskData.id);
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

   console.log(taskData?.taskDate)

   return (
      <View>
         <PanGestureHandler
            simultaneousHandlers={simultaneousHandlers}
            onGestureEvent={panGesture}
         >
            <Animated.View
               style={[styles.container, transAnimation, containerStyle]}
            >
               <Text style={{fontSize:17,color:"white"}}>{taskData?.taskTitle}</Text>

               <Text style={{fontSize:13,color:"#F2EAD3",}}>03-08 08:37 pm {taskData.taskDate&& <Notibell name="notifications-circle-sharp" size={20} color="#F2EAD3"  />}</Text>

            </Animated.View>
         </PanGestureHandler>
         <Animated.View style={[styles.actionContainer, opacityAnimation]}>
          <View style={{flex:2.3}}/>
            <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
               <Star name="star-outlined" size={30} color="black"  />
               <Calender name="calendar" size={30} color="black" />
               <Clock name="clock-outline" size={30} color="black" />
            </View>
         </Animated.View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#8B6AFE",
      width: 350,
      // height: 70,
//   alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 10,
      zIndex: 1,
      // marginBottom:20
      fontSize: 20,
      marginHorizontal: 5,
      paddingHorizontal: 10,
   },
   actionContainer: {
      backgroundColor: "#BEADFA",
      width: 350,
      height: 70,
      alignItems: "end",
      justifyContent: "space-evenly",
      borderRadius: 17,
      position: "absolute",
      flexDirection: "row",
   },
});

export default ListItem;
