import {View, Text, Button, StyleSheet, Dimensions} from "react-native";
import React, {useCallback, useRef, useState} from "react";
import ListItem from "../../../Components/ListItem";

import {ScrollView} from "react-native-gesture-handler";
import AddTask from "../../../Components/AddTask/AddTask";
import AddTask2 from "../../../Components/AddTask/AddTask2";

const All = () => {
   const data = new Array(15).fill("Hello").map((_, i) => "Hello");
   // console.log(data);

   var numberArray = [
      {
         id: 1,
         name: "rajiv",
      },
      {
         id: 2,
         name: "rajiv",
      },
      {
         id: 3,
         name: "rajiv",
      },
      {
         id: 4,
         name: "rajiv",
      },
      {
         id: 5,
         name: "rajiv",
      },
   ];

   const [tasks, setTasks] = useState(numberArray);
   // console.log(tasks);

   const onDismiss = useCallback((id) => {
      setTasks((tasks) => tasks?.filter((item) => item.id !== id));
   }, []);

   const scrollRef = useRef(null);

   return (
      <>
         <ScrollView
            ref={scrollRef}
            pagingEnabled={false} //</>style={{backgroundColor:"grey"}}
         >
            <View style={style.container}>
               <View
                  style={{
                     marginTop: 85,
                     marginBottom: 65,
                     alignItems: "center",
                     justifyContent: "center",
                     // opacity:.5
                  }}
               >
                  {tasks?.map((item) => (
                     <View key={item.id}>
                        <ListItem
                           simultaneousHandlers={scrollRef}
                           title={item}
                           onDismiss={onDismiss}
                        />
                     </View>
                  ))}
               </View>
            </View>
         </ScrollView>
         <AddTask />
      </>
   );
};

const {height} = Dimensions.get("window");
// console.log(height);
const style = StyleSheet.create({
   container: {
      // flex: 1,
      // justifyContent: "space-between",
      alignItems: "center",
      minHeight: height,
      backgroundColor: "#16213E",
      position: "relative",
      gap: 10,

      // backgroundColor:"red"
   },
});

export default All;
