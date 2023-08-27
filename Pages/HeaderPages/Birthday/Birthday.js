import {View, Dimensions, StyleSheet} from "react-native";
import React, {useRef, useEffect} from "react";
import AddTask from "../../../Components/AddTask/AddTask";
import {DataContext} from "../../../Context/DataContext";
import ListItem from "../../../Components/List/ListItem";
import {ScrollView} from "react-native-gesture-handler";
import NothingToShow from "../../../Components/NothingToShow/NothingToShow";
import {ThemeContext} from "../../../Context/ThemeContext";

const Birthday = () => {
   const {theme} = React.useContext(ThemeContext);
   const {height} = Dimensions.get("window");
   const {data} = React.useContext(DataContext);
   const [tasks, setTasks] = React.useState(null);
   const scrollRef = useRef(null);

   useEffect(() => {
      setTasks(data?.filter((item) => item.taskCategory === "Birthday"));
   }, [data]);

   const style = StyleSheet.create({
      container: {
         alignItems: "center",
         minHeight: height,
         backgroundColor: theme?.BackgroundColor,
         position: "relative",
         gap: 10,
      },
   });

   return (
      <>
         <ScrollView ref={scrollRef} pagingEnabled={false}>
            <View style={style.container}>
               <View
                  style={{
                     marginTop: 85,
                     marginBottom: 65,
                     alignItems: "center",
                     justifyContent: "center",
                  }}
               >
                  {tasks?.length > 0 ? (
                     tasks?.map((item) => (
                        <View key={item.id}>
                           <ListItem
                              simultaneousHandlers={scrollRef}
                              taskData={item}
                           />
                        </View>
                     ))
                  ) : (
                     <NothingToShow />
                  )}
               </View>
            </View>
         </ScrollView>
         <AddTask />
      </>
   );
};

export default Birthday;
