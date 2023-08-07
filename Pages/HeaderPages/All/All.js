import {View, Text, Button, StyleSheet, Dimensions} from "react-native";
import React, {useCallback, useRef, useState} from "react";
import ListItem from "../../../Components/ListItem";

import {ScrollView} from "react-native-gesture-handler";
import AddTask from "../../../Components/AddTask/AddTask";
import {ReducerContext} from "../../../Components/Reducer/ReducerContext";

const All = () => {
   // const data = new Array(15).fill("Hello").map((_, i) => "Hello");
   // console.log(data);
   const {state:data, dispatch} = React.useContext(ReducerContext);
   console.log(data, "DATA FROM REDUCER")

   var numberArray = [
      {
         id: 1,
         name: "Hello",
      },
      {
         id: 2,
         name: "Hello",
      },
      {
         id: 3,
         name: "Hello",
      },
      {
         id: 4,
         name: "Hello",
      },
      {
         id: 5,
         name: "Hello",
      },
   ];

   const [tasks, setTasks] = useState(numberArray);
   console.log(tasks);

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
                  {data?.map((item) => (
                     <View key={item.id}>
                        <ListItem
                           simultaneousHandlers={scrollRef}
                           taskData={item}
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
