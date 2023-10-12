import {createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
   const [isLoading, setIsLoading] = useState(false);
   const [theme, setTheme] = useState(theme);

   // Setting Color Data in Local Storage

   const setColorData = async (Data) => {
      try {
         const jsonValue = JSON.stringify(Data);

         await AsyncStorage.setItem("theme", jsonValue);

         getColorData();
      } catch (e) {
         console.log(e, "ERROR");
      }
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
         console.log(e, "ERROR");
      }
   };

   useEffect(() => {
      getColorData();
   }, []);

   if (theme === null) {
      setColorData({
         id: 8,
         BackgroundColor: "#000000",
         PrimaryColor: "#8B6AFE",
         SecondaryColor: "#BEADFA",
         TextColorPrimary: "#FFFFFF",
         TextColorSecondary: "#000",
         InActiveColor: "#8E8E8F",
         IconColor: "#FFFFFF",
         BarStyle: "light-content",
         BottomSheetColorBG: "#160040",
         drawer: {
            drawerActiveBackgroundColor: "#8B6AFE",
            drawerActiveTintColor: "#000",
            drawerInactiveTintColor: "#FFFFFF",
         },
      });
   }

   return (
      <ThemeContext.Provider value={{setColorData, theme, isLoading}}>
         {children}
      </ThemeContext.Provider>
   );
}
