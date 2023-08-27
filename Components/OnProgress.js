import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   Dimensions,
} from "react-native";
import React, {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";
import LottieView from "lottie-react-native";

const OnProgress = ({navigation}) => {
   const {theme} = useContext(ThemeContext);
   const {width, height} = Dimensions.get("window");

   //   STYLES
   const styles = StyleSheet.create({
      container: {
         flex: 1,
         alignItems: "center",
         backgroundColor: theme?.BackgroundColor,
         height,
         width,
      },
      lottie: {
         width: width / 2,
         height: height / 2,
         alignItems: "center",
      },
      text: {
         fontSize: 25,
         fontWeight: "bold",
         color: theme?.PrimaryColor,
      },
      backButton: {
         color: theme?.SecondaryColor,
         fontSize: 15,
         fontWeight: "bold",
         marginTop: 20,
         borderColor: theme?.SecondaryColor,
         borderWidth: 1,
         borderRadius: 10,
         padding: 10,
      },
   });

   return (
      <View style={styles.container}>
         <LottieView
            style={styles.lottie}
            source={require("../assets/Json/CatWorking.json")}
            autoPlay
            loop
            speed={2}
         />
         <Text style={styles.text}>We are working on it ...</Text>
         <TouchableOpacity
            onPress={() => navigation.navigate("Home", {screen: "Tasks"})}
         >
            <Text style={styles.backButton}>Go Back</Text>
         </TouchableOpacity>
      </View>
   );
};

export default OnProgress;
