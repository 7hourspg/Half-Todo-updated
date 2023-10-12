import {StyleSheet, ScrollView} from "react-native";
import React, {useState, useEffect, useRef} from "react";
import {Calendar} from "react-native-calendars";

import OnProgress from "../../Components/OnProgress";

const Calender = ({navigation}) => {
   const [selectedDay, setSelectedDay] = useState(null);
   const date = new Date();

   let day = date.getDate();
   let month = date.getMonth() + 1;
   let year = date.getFullYear();

   const scrollViewRef = useRef();

   useEffect(() => {
      scrollViewRef.current.scrollToEnd({animated: true});
   }, []);

   return (
      <ScrollView
         style={{flex: 1, backgroundColor: "black"}}
         ref={scrollViewRef}
      >
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
         />

         <OnProgress navigation={navigation} />
      </ScrollView>
   );
};

export default Calender;

const styles = StyleSheet.create({
   calendar: {
      borderBottomColor: "grey",
      borderBottomWidth: 1,
   },
});
