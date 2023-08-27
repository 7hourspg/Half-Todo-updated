import React, {useEffect, useReducer, createContext, useState} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const INTIAL_STATE = [];

export const DataContext = createContext(INTIAL_STATE);

export const DataProvider = ({children}) => {
   const [data, setData] = useState([]);

   const getTasksData = async () => {
      try {
         const jsonValue = await AsyncStorage.getItem("tasks");

         setData(JSON.parse(jsonValue));
      } catch (e) {
         console.log(e);
      }
   };

   const setTasksData = async (Data) => {
      try {
         if (data === null) {
            await AsyncStorage.setItem("tasks", JSON.stringify([Data]));
            getTasksData();
         } else {
            const jsonValue = JSON.stringify([...data, Data]);
            await AsyncStorage.setItem("tasks", jsonValue);

            getTasksData();
         }
      } catch (e) {
         console.log(e, "ERROR");
      }
   };

   useEffect(() => {
      getTasksData();
   }, []);

   const onDismiss = (id) => {
      console.log(id, "DISMISS");
      const dismis = data?.filter((item) => item.id !== id);
      console.log(dismis, "DISMISS");
      setFilteredData = async () => {
         try {
            await AsyncStorage.setItem("tasks", JSON.stringify(dismis));
         } catch (e) {
            console.log(e, "ERROR");
         }

         console.log("Done.");
      };
      setData(dismis);
      setFilteredData();
      getTasksData();
   };

   return (
      <DataContext.Provider
         value={{
            data,
            setData,
            getTasksData,
            setTasksData,
            onDismiss,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};
