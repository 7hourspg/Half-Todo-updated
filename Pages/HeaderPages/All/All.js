import {View, Text, Button, StyleSheet, Dimensions} from "react-native";
import React, {useCallback, useRef, useState, useEffect} from "react";
import ListItem from "../../../Components/ListItem";

import {ScrollView} from "react-native-gesture-handler";
import AddTask from "../../../Components/AddTask/AddTask";
import {DataContext} from "../../../Context/DataContext";

const All = () => {
   const scrollRef = useRef(null);

   // const data = new Array(15).fill("Hello").map((_, i) => "Hello");
   // console.log(data);
   const {data, dispatch,getTasksData} = React.useContext(DataContext);
   // console.log(data, "DATA FROM REDUCER");
   const [arr, setArr] = useState(data);
   // console.log(arr, "ARR");


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

   

   const [tasks, setTasks] = useState(data);
   // console.log(tasks);

   // const onDismiss = useCallback((id) => {
   //    // console.log(id, "ID");
   //    const dismis= tasks?.filter((item) => item.id !== id)
   //    // console.log("first", tasks)
   //    // console.log(tasks, "TASKS");
   //    console.log(dismis, "DISMISS");
   // }, []);


   useEffect(() => {
      setTasks(data);   
   }, [data]);

   // clearAll = async () => {
   //    try {
   //      await AsyncStorage.clear()
   //    } catch(e) {
   //      // clear error
   //    }
    
   //    console.log('Done.')
   //  }
// console.log(data,"DATA FROM REDUCERRR")
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
                  {/* <Button title="Hello" onPress={()=>getTasksData()} /> */}
                  {tasks?.map((item) => (
                     <View key={item?.id}>
                        <ListItem
                           simultaneousHandlers={scrollRef}
                           taskData={item}
                           // onDismiss={onDismiss}
                           // key={item.id}
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
