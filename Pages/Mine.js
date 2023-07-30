import {View, Text, Button} from "react-native";
import React, {useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const Mine = () => {
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState("date");
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
      const currentDate = selectedDate || mydate;
      setDate(currentDate);
      // console.log(event)
      setShow(false);
      const newDate = new Date(currentDate);
      console.log(
         newDate.toISOString().split("T")[0].split("-").reverse().join("-")
      );
      console.log(newDate.toLocaleTimeString());
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
   };

   //  console.log(new Date());
   return (
      <View style={{backgroundColor:"black", flex:1,}}>
         <Text>Hello</Text>
         <View style={{backgroundColor:"black",flex:1}}>
            <Button onPress={displayTimepicker} title="Your Time Picker" />
            <Button onPress={displayDatepicker} title="Your Date Picker" />
         </View>
         <View style={{ backgroundColor:"black",}}>
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
                  minimumDate={new Date()}
                  positiveButton={{label: "OK", textColor: "green"}}
                  negativeButton={{label: "Cancel", textColor: "red"}}

                  style={{backgroundColor:"black"}}
                  themeVariant="dark"
               />
            )}
         </View>
      </View>
   );
};

export default Mine;
