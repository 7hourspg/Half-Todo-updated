import {View, StyleSheet, Dimensions} from "react-native";
import React, {useRef, useState, useEffect} from "react";
import ListItem from "../../../Components/List/ListItem";

import {ScrollView} from "react-native-gesture-handler";
import AddTask from "../../../Components/AddTask/AddTask";
import {DataContext} from "../../../Context/DataContext";
import NothingToShow from "../../../Components/NothingToShow/NothingToShow";
import {ThemeContext} from "../../../Context/ThemeContext";

const All = () => {
   const scrollRef = useRef(null);

   const {data} = React.useContext(DataContext);
   const {theme} = React.useContext(ThemeContext);

   const [tasks, setTasks] = useState(data);

   useEffect(() => {
      setTasks(data);
   }, [data]);

   // STYLES
   const {height} = Dimensions.get("window");
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

export default All;
