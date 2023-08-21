import {View, StyleSheet, Keyboard} from "react-native";
import React, {useState} from "react";
import Calender from "react-native-vector-icons/AntDesign";
import Clock from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTime = ({setTaskDate}) => {
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState("date");
   const [isDisplayDate, setShow] = useState(false);

   const changeSelectedDate = (event, selectedDate) => {
      if (event.type === "dismissed") {
         setShow(false);
         return;
      } else if (event.type === "set") {
         // console.log(event, "event");
         const currentDate = selectedDate || mydate;
         // console.log(currentDate, "currentDate");
         setDate(currentDate);
         // console.log(event)
         setShow(false);
         const newDate = new Date(currentDate);
         console.log(
            newDate.toISOString().split("T")[0].split("-").join("-")
         ,"Hello from Date");
         // console.log(
         //    newDate.toISOString().split("T")[0].split("-").reverse().join("-")
         // );
         setTaskDate([newDate.toISOString().split("T")[0].split("-").join("-"),newDate.toLocaleTimeString()]);
         console.log(newDate.toLocaleTimeString());
      }
   };
   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };
   const displayDatepicker = () => {
      showMode("date");
   };
   const displayTimepicker = () => {
      showMode("time");
      Keyboard.dismiss();
   };
   // console.log(mydate,"mydate")
   return (
      <View style={styles.container}>
         <Calender
            onPress={displayDatepicker}
            name="calendar"
            size={30}
            color="black"
         />
         <Clock
            onPress={displayTimepicker}
            name="clock"
            size={30}
            color="black"
         />

         {isDisplayDate && (
            <DateTimePicker
               testID="dateTimePicker"
               value={mydate}
               mode={displaymode}
               is24Hour={false}
               display="default"
               onChange={changeSelectedDate}
               // onChange={(event, selectedDate) => {
               //    const currentDate = selectedDate || mydate;
               //    setDate(currentDate);
               //    setShow(false);
               // }}
               // minimumDate={new Date()}
               positiveButton={{label: "OK", textColor: "green"}}
               negativeButton={{label: "Cancel", textColor: "red"}}
               style={{backgroundColor: "black"}}
               themeVariant="dark"
               onTouchCancel={() => setShow(false)}
            />
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: 160,
      marginTop: 20,
      marginBottom: 20,
      padding: 10,
      backgroundColor: "#BEADFA",
      borderRadius: 20,
      overflow: "hidden",
      paddingBottom: 10,
   },
});

export default DateTime;
