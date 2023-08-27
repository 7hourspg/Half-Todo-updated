import {View, Text, StyleSheet, Dimensions} from "react-native";
import React, {useContext} from "react";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated, {
   runOnJS,
   useAnimatedGestureHandler,
   useAnimatedStyle,
   useSharedValue,
   withDelay,
   withTiming,
} from "react-native-reanimated";
import Calender from "react-native-vector-icons/AntDesign";
import Clock from "react-native-vector-icons/MaterialCommunityIcons";
import Star from "react-native-vector-icons/Entypo";
import Notibell from "react-native-vector-icons/Ionicons";
import {DataContext} from "../../Context/DataContext";
import {ThemeContext} from "../../Context/ThemeContext";

const ListItem = ({taskData, simultaneousHandlers}) => {
   const {theme} = useContext(ThemeContext);
   const {onDismiss} = useContext(DataContext);
   const {width: SCREEN_WIDTH, height: height} = Dimensions.get("screen");

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
         translateX.value = context.value.y + e.translationX;
         translateX.value = Math.min(translateX.value, 0);
      },
      onEnd: () => {
         if (translateX.value > -80) {
            translateX.value = withTiming(0);
         } else if (translateX.value > -200 && translateX.value < -50) {
            translateX.value = withTiming(-140);
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

   // STYELS

   const styles = StyleSheet.create({
      container: {
         backgroundColor: theme?.PrimaryColor,
         width: 350,
         justifyContent: "space-evenly",
         borderRadius: 10,
         zIndex: 1,
         fontSize: 20,
         marginHorizontal: 5,
         paddingHorizontal: 10,
      },
      actionContainer: {
         backgroundColor: theme?.SecondaryColor,
         width: 350,
         height: 70,
         alignItems: "end",
         justifyContent: "space-evenly",
         borderRadius: 17,
         position: "absolute",
         flexDirection: "row",
      },
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
               <Text style={{fontSize: 17, color: theme?.TextColorPrimary}}>
                  {taskData?.taskTitle}
               </Text>

               <Text style={{fontSize: 13, color: theme?.TextColorPrimary}}>
                  03-08 08:37 pm{" "}
                  {taskData.taskDate && (
                     <Notibell
                        name="notifications-circle-sharp"
                        size={20}
                        color={theme?.TextColorPrimary}
                     />
                  )}
               </Text>
            </Animated.View>
         </PanGestureHandler>
         <Animated.View style={[styles.actionContainer, opacityAnimation]}>
            <View style={{flex: 1.5}} />
            <View
               style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
               }}
            >
               <Star name="star-outlined" size={30} color="black" />
               <Calender name="calendar" size={30} color="black" />
               <Clock name="clock-outline" size={30} color="black" />
            </View>
         </Animated.View>
      </View>
   );
};

export default ListItem;
