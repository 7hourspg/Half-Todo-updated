import "react-native-get-random-values";
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
import React, {useState, useContext} from "react";
// import SelectDropdown from "react-native-select-dropdown";
import {SelectCountry as SelectDropdown} from "react-native-element-dropdown";
import DateTime from "./DateTime";
import Icon from "react-native-vector-icons/Ionicons";
import {DataContext} from "../../Context/DataContext";
import {v4 as uuidv4} from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BottomSheetInnerContainer = () => {
   const {data, setData, getTasksData} = useContext(DataContext);
   const [taskTitle, setTaskTitle] = useState("");
   const [taskCategory, setTaskCategory] = useState("");
   const [taskDate, setTaskDate] = useState(null);
   // const [taskTime, setTaskTime] = useState(null);
   const [taskValue, setTaskValue] = useState("1");

   // id: 1,
   //    taskTitle: "Hello",
   //    taskCategory: "Work",
   //    taskDate: "2021-05-25",
   //    taskTime: "12:00",
   //    isTaskCompleted: false,

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

   const setTasksData = async (Data) => {
      console.log(Data, "DATA FROM REDUCER")
      try {
         const jsonValue = JSON.stringify([...data, Data]);

         await AsyncStorage.setItem("tasks", jsonValue);

         getTasksData();
      } catch (e) {
         // console.log(e, "ERROR");
      }
   };

   const submitTask = () => {
      if (!taskTitle) {
         alert("Please enter task 😊");
         return;
      } else {
            setData([
               ...data,
               {
                  taskTitle,
                  taskCategory,
                  taskDate,
                  // taskTime,
                  isTaskCompleted: false,
                  id: uuidv4(),
               },
            ]);

         setTasksData({
            taskTitle,
            taskCategory,
            taskDate,
            // taskTime,
            isTaskCompleted: false,
            id: uuidv4(),
         });
      }
      setTaskTitle("");
      setTaskCategory("");
      setTaskDate(null);
      // setTaskTime(null);
      setTaskValue("1");
   };

   // console.log(uuidv4(), "UUID");

   // console.log(data, "DATA FROM REDUCER")

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
               // imageField="image"
               // placeholder="Select country"
               // searchPlaceholder="Search..."
               onChange={(e) => {
                  // setTaskCategory(e.lable);
                  // console.log({label: e.lable, value: e.value});
                  setTaskCategory(e.lable);
                  setTaskValue(e.value);
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
            <DateTime setTaskDate={setTaskDate} />
         </View>
         <TouchableOpacity
            onPress={() => {
               submitTask();
            }}
            style={styles.submitContainer}
         >
            <Icon name="checkmark-done-circle-sharp" size={35} color="white" />
         </TouchableOpacity>
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
      // marginVertical: 10,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
   submitContainer: {
      backgroundColor: "green",
      alignSelf: "center",
      marginBottom: 20,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
   },
});

export default BottomSheetInnerContainer;
