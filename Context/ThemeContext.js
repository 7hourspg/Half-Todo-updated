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
      console.log(Data, "DATA")
      try {
         const jsonValue = JSON.stringify(Data);

         await AsyncStorage.setItem("theme", jsonValue);

         getColorData();
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

   console.log(theme, "THEME")

   if(theme===null){
      console.log("NO THEME SELECTED")
      setColorData({
         id: 8,
         Color: "#000000",
         TabBackgroundColor: "red",
         BackgroundColor: "#000000",
         primaryColor: "#8B6AFE",
         secondaryColor: "#BEADFA",
         textColorPrimary: "#FFFFFF",
         textColorSecondary: "#000",
   
         topTab: {
            backgroundColor: "#000000",
            borderColor: "#8B6AFE",
            activeColor: "#8B6AFE",
         },
   
         bottomTab: {
            backgroundColor: "#000000",
            borderColor: "#8B6AFE",
            activeColor: "#8B6AFE",
         },
   
         BottomSheet: {
            backgroundColor: "#160040",
            lineColor: "#BEADFA",
            inputTextColor: "#160040",
            allComponentColor: "#BEADFA",
            submitButtonColor: "#8B6AFE",
         },
   
         Drawer: {
            backgroundColor: "#000000",
            textColor: "white",
            activeColor: "#8B6AFE",
            iconColor: "white",
         },
   
         AddTask: {
            color: "#8B6AFE",
            iconColor: "white",
         },
   
         ListItem: {
            primaryColor: "#8B6AFE",
            secondaryColor: "#BEADFA",
            textColor: "white",
            iconColor: "black",
         },
      })
   }

   return (
      <ThemeContext.Provider
         value={{setColorData, theme, Scenery, getScenery, isLoading}}
      >
         {children}
      </ThemeContext.Provider>
   );
}
