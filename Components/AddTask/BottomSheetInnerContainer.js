import {
   View,
   Text,
   Keyboard,
   StyleSheet,
   Dimensions,
   TextInput,
   TouchableOpacity,
   Modal,
   FlatList,
} from "react-native";
import React, {useState, useRef} from "react";
import SelectDropdown from "react-native-select-dropdown";
import {SelectCountry} from "react-native-element-dropdown";

const BottomSheetInnerContainer = () => {
   const [country, setCountry] = useState("1");
   const local_data = [
      {
         value: "1",
         lable: "No Category",
      },
      {
         value: "2",
         lable: "Work",
      },
      {
         value: "3",
         lable: "Personal",
      },
      {
         value: "4",
         lable: "Wishlist",
      },
      {
         value: "5",
         lable: "Birthday",
      },
   ];

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Type task here..."
            onSubmitEditing={Keyboard.dismiss}
            autoFocus={true}
            //   onLayout={() => inputRef.current.focus()}
            //   onKeyPress={() => {console.log("first")}}
         />
         <View style={styles.innerContainer}>
            <SelectCountry
               style={styles.dropdown}
               selectedTextStyle={styles.selectedTextStyle}
               placeholderStyle={styles.placeholderStyle}
               imageStyle={styles.imageStyle}
               inputSearchStyle={styles.inputSearchStyle}
               iconStyle={styles.iconStyle}
               maxHeight={200}
               minHeight={220}
               value={country}
               data={local_data}
               valueField="value"
               labelField="lable"
               // imageField="image"
               placeholder="Select country"
               searchPlaceholder="Search..."
               onChange={(e) => {
                  setCountry(e.value);
               }}
               onFocus={() => Keyboard.dismiss()}
               activeColor={"#9BE8D8"}
               autoScrollToDefaultValue={true}
               dropdownPosition="top"
               containerStyle={{
                  borderRadius: 20,
                  overflow: "hidden",
                  marginBottom: -10,
                  //    alignSelf: "center",
               }}
               showsVerticalScrollIndicator={false}
            />
            {/* <Text>Hello</Text> */}
         </View>
      </View>
   );
};
const {width} = Dimensions.get("window");
const styles = StyleSheet.create({
   container: {
      marginTop: 20,
   },
   input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 10,
      // marginBottom: 50,
      width: width - 50,
      backgroundColor: "#ECDBBA",
      paddingVertical: 20,
      color: "#160040",
      fontSize: 17,
      //  fontWeight: "bold",
   },
   innerContainer: {
      marginVertical: 15,
      position: "relative",
      overflow: "hidden",
   },
   dropdown: {
      //   margin: 16,
      height: 50,
      //  borderBottomColor: "gray",
      //  borderBottomWidth: 0.5,
      backgroundColor: "white",
      width: 160,
      // alignSelf:"center",
      borderRadius: 20,
      padding: 10,
      overflow: "hidden",
      paddingBottom: 10,
   },
   imageStyle: {
      width: 24,
      height: 24,
      //  display: "none",
   },
   placeholderStyle: {
      fontSize: 16,
      color: "red",
   },
   selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
      color: "#160040",
      //  backgroundColor:"red"
      borderRadius: 20,
   },
   iconStyle: {
      width: 20,
      height: 20,
   },
   inputSearchStyle: {
      height: 40,
      fontSize: 16,
   },
});

export default BottomSheetInnerContainer;
