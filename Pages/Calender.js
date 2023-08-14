import {View, Text, StyleSheet, Dimensions} from "react-native";
import React, {useState, useEffect} from "react";
import {
   Calendar,
   CalendarList,
   Agenda,
   WeekCalendar,
   AgendaList,
} from "react-native-calendars";
// import AddTask from "../Components/AddTask/AddTask";

// Require cycle: Pages\Calender.js -> Components\AddTask\AddTask.js -> Pages\Calender.js Error because of this line 😒

const Calender = () => {
   const [selectedDay, setSelectedDay] = useState(null);
   const date = new Date();

   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();
   // console.log(`${year}/${month}/${day}`)

   console.log(selectedDay?.selected);

   const {height, width} = Dimensions.get("screen");

   return (
      <View style={{flex: 1, backgroundColor: "black"}}>
         <Calendar
            style={[styles.calendar, {height: 350}]}
            onDayPress={(day) => {
               setSelectedDay({selected: day.dateString});
            }}
            enableSwipeMonths={true}
            markedDates={{
               [selectedDay?.selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  //    marked: true,
                  selectedColor: "green",
                  activeOpacity: true,
               },
            }}
            theme={{
               "stylesheet.calendar.header": {
                  dayTextAtIndex0: {
                     color: "red",
                  },
                  dayTextAtIndex6: {
                     color: "red",
                  },
                  monthText: {
                     color: "white",
                     fontWeight: "bold",
                     fontSize: 20,
                  },
               },
               backgroundColor: "red",
               calendarBackground: "black",
               todayTextColor: "green",
               textDayFontSize: 20,
               textMonthFontSize: 20,
               textDayHeaderFontSize: 17,
               textDayStyle: {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
               },
               textInactiveColor: "grey",
               textDisabledColor: "grey",
            }}
            disableArrowLeft={true}
            hideExtraDays={true}
            minDate={`${new Date().getFullYear()}-${
               new Date().getMonth() + 1
            }-${new Date().getDate()}`}
            maxDate={`${new Date().getFullYear()}-${
               new Date().getMonth() + 2
            }-${new Date().getDate()}`}

            //   markingType="multi-dot"
            //   markedDates={{
            //      '2023-07-29': {selected: true,  selectedColor: 'green',marked: true, dotColor: 'red'},
            //      '2023-07-29': {selected: true,  selectedColor: 'green',marked: true, dotColor: 'red'},
            //      '2023-07-30': {selected: true,  selectedColor: 'green'}
            //    }}
         />
         {/* <Text style={{color: "red"}}>Hello</Text> */}
         {/* <AddTask/> */}
      </View>
   );
};

export default Calender;

const styles = StyleSheet.create({
   calendar: {
      // backgroundColor: 'grey',
      borderBottomColor: "grey",
      borderBottomWidth: 1,
   },
});
