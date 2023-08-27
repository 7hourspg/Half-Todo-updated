import {
   View,
   TouchableOpacity,
   Keyboard,
   StyleSheet,
   Dimensions,
} from "react-native";
import React, {useState, useEffect, useContext} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import BottomSheet from "./BottomSheet";
import {ThemeContext} from "../../Context/ThemeContext";

const AddTask = () => {
   const {theme} = useContext(ThemeContext);
   const [showTextInput, setShowTextInput] = useState(false);

   return (
      <View style={{position: "absolute", bottom: 0, right: 0}}>
         {showTextInput ? (
            <BottomSheet height={400} setShowTextInput={setShowTextInput} />
         ) : (
            <TouchableOpacity
               style={{
                  position: "absolute",
                  bottom: 120,
                  right: 30,
                  backgroundColor: theme?.PrimaryColor,
                  paddingVertical: 20,
                  paddingHorizontal: 22,
                  borderRadius: 50,
               }}
               onPress={() => setShowTextInput(true)}
            >
               <Icon
                  name="add"
                  color={theme?.IconColor}
                  style={{fontWeight: "900"}}
                  size={35}
               />
            </TouchableOpacity>
         )}
      </View>
   );
};

export default AddTask;
