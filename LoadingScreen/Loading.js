// import React, {useContext} from 'react';
// import {StyleSheet, Text} from 'react-native';
// import AnimatedLoader from 'react-native-animated-loader';

// import { ThemeContext } from '../Context/ThemeContext';

// export default function Loading() {
//   const { isLoading } = useContext(ThemeContext);

//   // const colorg="green"

//   console.log(isLoading)

//   return (
//     <AnimatedLoader
//       visible={isLoading}
//       overlayColor="rgba(255,255,255,0.75)"
//       animationStyle={styles.lottie}
//       source={require('../assets/9582-liquid-4-dot-loader.json')}
      
//       speed={2}>
     
      
//     </AnimatedLoader>
//   );
// }
// const styles = StyleSheet.create({
//   lottie: {
//     // width: 100,
//     // height: 100,
//     backgroundColor:"black"
//   },
// });


import { View, Text } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading