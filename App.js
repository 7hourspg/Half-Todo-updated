import {View, Text, StatusBar, StyleSheet, SafeAreaView} from "react-native";
import React, {useContext} from "react";
import Home from "./Pages/Home";
import StatusBarStyle from "./Components/StatusBarStyle";
import {NavigationContainer} from "@react-navigation/native";
import "react-native-gesture-handler";

import ThemeProvider from "./Context/ThemeContext";
import {DataProvider} from "./Context/DataContext";

const index = () => {
   return (
      <ThemeProvider>
         <StatusBarStyle />
         <View style={{flex: 1}}>
            <View style={styles.container}>
               <NavigationContainer>
                  <DataProvider>
                     <Home />
                  </DataProvider>
               </NavigationContainer>
            </View>
         </View>
      </ThemeProvider>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});

export default index;
