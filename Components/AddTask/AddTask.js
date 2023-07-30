import {
   View,
   Text,
   TouchableOpacity,
   TextInput,
   Keyboard,
   StyleSheet,
   Dimensions,
} from "react-native";
import React, {useState, useEffect} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import SelectDropdown from "react-native-select-dropdown";
import Calender from "../../Pages/Calender";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";

const AddTask = () => {
   const [showTextInput, setShowTextInput] = useState(false);

   const [keyboardStatus, setKeyboardStatus] = useState("");

   const countries = ["All", "Work", "Personal", "Wishlist", "Birthday"];

   useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
         setKeyboardStatus("Keyboard Shown");
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
         setKeyboardStatus("Keyboard Hidden");
      });

      return () => {
         showSubscription.remove();
         hideSubscription.remove();
      };
   }, []);

   const {height, width} = Dimensions.get("screen");

   console.log(showTextInput);

   return (
      <View style={{position: "absolute", bottom: 0, right: 0}}>
         {showTextInput ? (
            // <TouchableOpacity
            //   activeOpacity={1}
            //   onPress={() => setShowTextInput(false)}
            //   style={style.container}
            // >
            //   <TouchableOpacity activeOpacity={1} style={style.innerContainer}>
            //     <TextInput
            //       style={style.input}
            //       placeholder="Type task here..."
            //       onSubmitEditing={Keyboard.dismiss}
            //       autoFocus={true}
            //     />
            //     <SelectDropdown
            //       data={countries}
            //       // defaultValue={"Hello"}
            //       dropdownStyle={true}

            //       onSelect={(selectedItem, index) => {
            //         console.log(selectedItem, index);
            //       }}
            //       buttonTextAfterSelection={(selectedItem, index) => {
            //         // text represented after item is selected
            //         // if data array is an array of objects then return selectedItem.property to render after item is selected
            //         return selectedItem;
            //       }}
            //       rowTextForSelection={(item, index) => {
            //         // text represented for each item in dropdown
            //         // if data array is an array of objects then return item.property to represent item in dropdown
            //         return item;
            //       }}
            //     />
            //     {/* <Calender/> */}
            //   </TouchableOpacity>
            // </TouchableOpacity>

            <BottomSheet height={400} setShowTextInput={setShowTextInput} />
         ) : (
            <TouchableOpacity
               style={{
                  position: "absolute",
                  backgroundColor: "green",
                  bottom: 120,
                  right: 30,
                  backgroundColor: "green",
                  paddingVertical: 20,
                  paddingHorizontal: 22,
                  borderRadius: 50,
               }}
               onPress={() => setShowTextInput(true)}
            >
               <Icon
                  name="add"
                  color="white"
                  style={{fontWeight: "900"}}
                  size={35}
               />
            </TouchableOpacity>
         )}
      </View>
   );
};
const {height, width} = Dimensions.get("screen");
const style = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      padding: 36,
      backgroundColor: "red",
      // zIndex: 1999,
      // position: "absolute",
      // alignItems: "center",
      // justifyContent: "center",
      // marginTop:100,

      // bottom: height/2-50,
      height: height,
   },
   innerContainer: {
      backgroundColor: "grey",
      width: width - 20,
      borderRadius: 10,
      alignItems: "center",
      paddingVertical: 20,
      marginBottom: 60,
      height: 200,
   },
   input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 4,
      // marginBottom: 50,
      width: width - 50,
   },
   status: {
      padding: 10,
      textAlign: "center",
   },
});

export default AddTask;
