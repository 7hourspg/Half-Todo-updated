import "react-native-get-random-values";
import {
   View,
   Keyboard,
   StyleSheet,
   Dimensions,
   TextInput,
   TouchableOpacity,
} from "react-native";
import React, {useState, useContext} from "react";
import {SelectCountry as SelectDropdown} from "react-native-element-dropdown";
import DateTime from "./DateTime";
import Icon from "react-native-vector-icons/Ionicons";
import {DataContext} from "../../Context/DataContext";
import {v4 as uuidv4} from "uuid";
import {ThemeContext} from "./../../Context/ThemeContext";

const BottomSheetInnerContainer = () => {
   const {setTasksData} = useContext(DataContext);
   const {theme} = useContext(ThemeContext);
   const [taskTitle, setTaskTitle] = useState("");
   const [taskCategory, setTaskCategory] = useState("");
   const [taskDate, setTaskDate] = useState(null);
   const [taskValue, setTaskValue] = useState("1");

   const task_Type = [
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

   const submitTask = () => {
      if (!taskTitle) {
         alert("Please enter task 😊");
         return;
      } else {
         setTasksData({
            taskTitle,
            taskCategory,
            taskDate,
            isTaskCompleted: false,
            id: uuidv4(),
         });
      }
      setTaskTitle("");
      setTaskCategory("");
      setTaskDate(null);
      setTaskValue("1");
   };

   // STYLES

   const {width} = Dimensions.get("window");
   const styles = StyleSheet.create({
      container: {
         marginTop: 20,
      },
      input: {
         padding: 10,
         borderWidth: 0.5,
         borderRadius: 10,
         width: width - 50,
         backgroundColor: theme?.SecondaryColor,
         paddingVertical: 20,
         color: theme?.TextColorSecondary,
         fontSize: 17,
      },
      innerContainer: {
         position: "relative",
         overflow: "hidden",
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
      },
      dropdown: {
         height: 50,
         backgroundColor: theme?.SecondaryColor,
         width: 170,
         borderRadius: 20,
         padding: 10,
         overflow: "hidden",
         paddingBottom: 10,
         width: width / 2.1,
      },
      imageStyle: {
         width: 24,
         height: 24,
         display: "none",
      },
      placeholderStyle: {
         fontSize: 16,
      },
      selectedTextStyle: {
         fontSize: 16,
         marginLeft: 8,
         color: theme?.TextColorSecondary,
         borderRadius: 20,
         backgroundColor: theme?.SecondaryColor,
         textAlign: "center",
         marginRight: 25,
         alignContent: "center",
      },
      iconStyle: {
         width: 20,
         height: 20,
      },
      inputSearchStyle: {
         height: 40,
         fontSize: 16,
      },
      submitContainer: {
         backgroundColor: theme?.PrimaryColor,
         alignSelf: "center",
         marginBottom: 20,
         paddingVertical: 5,
         paddingHorizontal: 15,
         borderRadius: 20,
      },
   });

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Type task here..."
            value={taskTitle}
            onSubmitEditing={Keyboard.dismiss}
            autoFocus={true}
            onChangeText={(text) => setTaskTitle(text)}
         />
         <View style={styles.innerContainer}>
            <SelectDropdown
               style={styles.dropdown}
               selectedTextStyle={styles.selectedTextStyle}
               placeholderStyle={styles.placeholderStyle}
               imageStyle={styles.imageStyle}
               inputSearchStyle={styles.inputSearchStyle}
               iconStyle={styles.iconStyle}
               maxHeight={200}
               minHeight={220}
               value={taskValue}
               data={task_Type}
               valueField="value"
               labelField="lable"
               onChange={(e) => {
                  setTaskCategory(e.lable);
                  setTaskValue(e.value);
               }}
               onFocus={() => Keyboard.dismiss()}
               activeColor={theme?.PrimaryColor}
               autoScrollToDefaultValue={true}
               dropdownPosition="top"
               containerStyle={{
                  borderRadius: 20,
                  overflow: "hidden",
                  marginBottom: -10,
               }}
               showsVerticalScrollIndicator={false}
            />
            <DateTime
               setTaskDate={setTaskDate}
               iconColor={theme?.TextColorSecondary}
               containerColor={theme?.SecondaryColor}
            />
         </View>
         <TouchableOpacity
            onPress={() => {
               submitTask();
            }}
            style={styles.submitContainer}
         >
            <Icon
               name="checkmark-done-circle-sharp"
               size={35}
               color={theme?.IconColor}
            />
         </TouchableOpacity>
      </View>
   );
};

export default BottomSheetInnerContainer;
