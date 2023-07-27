import {View, Text, StyleSheet} from "react-native";
import React, {useState, useEffect} from "react";
import {Calendar, CalendarList, Agenda} from "react-native-calendars";

const Calender = () => {
     const [selectedDay, setSelectedDay] = useState();
     const date = new Date();

let day = date.getDate()
let month = date.getMonth() + 1;
let year = date.getFullYear();
// console.log(`${year}/${month}/${day}`)

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
                              // marked: true,
                              selectedColor: "red",
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
                         },
                         backgroundColor: "red",
                         calendarBackground: "black",
                         todayTextColor: "green",
                         textDayFontSize: 20,
                         textMonthFontSize: 20,
                         textDayHeaderFontSize: 17,
                    }}
                    disableArrowLeft={true}
                    hideExtraDays={true}
               />
          </View>
     );
};

export default Calender;

const styles = StyleSheet.create({
     calendar: {
          // backgroundColor: 'grey',
     },
});
