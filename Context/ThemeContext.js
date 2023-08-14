import {createContext, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text} from "react-native";

export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
   const [isLoading, setIsLoading] = useState(false);
   const [theme, setTheme] = useState(theme);

   const [Scenery, setScenery] = useState("");

   // Setting Color Data in Local Storage

   const setColorData = async (Data) => {
      try {
         const jsonValue = JSON.stringify(Data);

         await AsyncStorage.setItem("theme", jsonValue);

         getColorData()
      } catch (e) {
         // console.log(e, "ERROR");
      }
   };
   const getScenery = (Data) => {
      setScenery(Data);
   };

   // Getting Data From Local Storage

   const getColorData = async () => {
      try {
         setIsLoading(true);

         const jsonValue = await AsyncStorage.getItem("theme");

         setTheme(JSON.parse(jsonValue));

         setTimeout(() => {
            setIsLoading(false);
         }, 1000);
      } catch (e) {
         // console.log(e);
      }
   };

   useEffect(() => {
      getColorData();
   }, []);

   return (
      <ThemeContext.Provider
         value={{setColorData, theme, Scenery, getScenery, isLoading}}
      >
         {children}
      </ThemeContext.Provider>
   );
}
