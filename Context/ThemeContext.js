import {createContext, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text} from "react-native";

export const ThemeContext = createContext(null);

export default function MyApp({children}) {
     const [isLoading, setIsLoading] = useState(false);
     const [theme, setTheme] = useState(theme);

     const [Scenery, setScenery] = useState("");

     // Setting Color Data in Local Storage

     const getColor = async (Data) => {
          try {
               const jsonValue = JSON.stringify(Data);

               await AsyncStorage.setItem("theme", jsonValue);

               getData();
          } catch (e) {
               console.log(e, "ERROR");
          }
     };
     const getScenery = (Data) => {
          setScenery(Data);
     };

     // Getting Data From Local Storage

     const getData = async () => {
          try {
               setIsLoading(true);

               const jsonValue = await AsyncStorage.getItem("theme");

               setTheme(JSON.parse(jsonValue));

               setTimeout(() => {
                    setIsLoading(false);
               }, 0);
          } catch (e) {
               console.log(e);
          }
     };

     useEffect(() => {
          getData();
     }, []);

     return (
          <ThemeContext.Provider
               value={{getColor, theme, Scenery, getScenery, isLoading}}
          >
               {children}
          </ThemeContext.Provider>
     );
}
