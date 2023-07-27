import {View, Text, StyleSheet, Dimensions} from "react-native";
import React from "react";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const ListItem = ({title, simultaneousHandlers,onDismiss}) => {
  const {width: SCREEN_WIDTH, height: height} = Dimensions.get("screen");
  // console.log(SCREEN_WIDTH, "WIDTH");

  const TRANSLATE_X_THRESOLD = -SCREEN_WIDTH * 0.35;
  const LIST_ITEM_HEIGHT = 70;

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginBottom = useSharedValue(20);

  const panGesture = useAnimatedGestureHandler({
    onActive: (e) => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
      // console.log(Math.trunc(translateX.value));
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginBottom.value = withTiming(0,undefined,(isFinished) => {
          if(isFinished&&onDismiss){
            runOnJS(onDismiss)(title.id)
          }
        });
      } else {
        translateX.value = withTiming(0);
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
    const opacity = withTiming(translateX.value < TRANSLATE_X_THRESOLD ? 0 : 1);
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

  // console.log(title.id)

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
        <Text>World</Text>
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
  },
});

export default ListItem;
