import {View, Text, Dimensions,StyleSheet} from "react-native";
import React,{useRef,useCallback,useEffect} from "react";
import AddTask from "../Components/AddTask/AddTask";
import { DataContext } from "../Context/DataContext";
import ListItem from "../Components/ListItem";
import { ScrollView } from "react-native-gesture-handler";


const Work = () => {

   const {height, width} = Dimensions.get("window");
   const {data, dispatch} = React.useContext(DataContext);
   const [tasks, setTasks] = React.useState(null);
   const scrollRef = useRef(null);

   // console.log(data,"DATA FROM WORK")
   // const onDismiss = useCallback((id) => {
   //    setTasks((tasks) => tasks?.filter((item) => item.id !== id));
   //    // console.log("first", tasks)
   // }, []);


   useEffect(() => {
      setTasks(data);
      setTasks((tasks) => tasks?.filter((item) => item.taskCategory === "Work"));

   }, [data]);

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
                        taskData={item}
                        // onDismiss={onDismiss}
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

export default Work;
