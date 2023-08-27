import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React, {useContext} from "react";
import ColorData from "./Color";
import {ThemeContext} from "../Context/ThemeContext";

const DisplayColor = () => {
   const {setColorData, theme} = useContext(ThemeContext);

   const styles = StyleSheet.create({
      innerCtr: {
         flexDirection: "row",
         justifyContent: "center",
         flexWrap: "wrap",
      },
      ColorBox: {
         width: 75,
         height: 75,
         borderRadius: 20,
         marginTop: 20,
         borderColor: theme?.SecondaryColor,
         borderWidth: 3,
      },
   });

   return (
      <View style={{flex: 1, maxHeight: 250}}>
         <View style={{marginLeft: 20, marginVertical: 15}}>
            <Text style={{fontSize: 16, color: "white"}}>Pure Color</Text>
         </View>
         <View style={styles.innerCtr}>
            {ColorData.map((item) => {
               return (
                  <View
                     key={item.id}
                     style={{flexDirection: "column", marginHorizontal: 10}}
                  >
                     <TouchableOpacity
                        style={[
                           {backgroundColor: item.BackgroundColor},
                           styles.ColorBox,
                        ]}
                        onPress={() => setColorData(item)}
                     ></TouchableOpacity>
                  </View>
               );
            })}
         </View>
      </View>
   );
};

export default DisplayColor;
