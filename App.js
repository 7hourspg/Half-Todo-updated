import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import Home from './Pages/Home';
import TopMargin from './Components/TopMargin';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import MyApp from './Context/ThemeContext';

const index = () => {
  return (
    <MyApp>
      {/* <StatusBar
        translucent={true}
        barStyle="dark-content" //light-content
        backgroundColor={'black'}
        
      /> */}
        <StatusBar style="auto" />
      <View style={styles.container}>
        <NavigationContainer>
          {/* <TopMargin /> */}

          <Home />
        </NavigationContainer>
      </View>
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