import {View, Text, StatusBar, StyleSheet,SafeAreaView} from "react-native";
import React, {useContext} from "react";
import Home from "./Pages/Home";
import TopMargin from "./Components/TopMargin";
import {NavigationContainer} from "@react-navigation/native";
import "react-native-gesture-handler";

import MyApp from "./Context/ThemeContext";
// import {SafeAreaView} from "react-native-safe-area-context";

const index = () => {
   return (
      <MyApp>
         <StatusBar
            // translucent={true}
            barStyle="light-content" //light-content
            backgroundColor={"black"}
         />

         {/* <StatusBar translucent={true} animated={true} /> */}
         <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
               <NavigationContainer>
                  {/* <TopMargin /> */}

                  <Home />
               </NavigationContainer>
            </View>
         </SafeAreaView>
      </MyApp>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});

export default index;

// <View style={{position:"absolute", bottom:10,zIndex:100,backgroundColor:"red"}}><Text>Hello</Text></View>
