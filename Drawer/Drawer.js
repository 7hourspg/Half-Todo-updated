import {View} from "react-native";
import React, {useContext} from "react";
import BottomTab from "../Components/Tabs/BottomTab";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAw5 from "react-native-vector-icons/FontAwesome5";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Ant from "react-native-vector-icons/AntDesign";
import Ion from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../Drawer/CustomDrawer";
import ThemePage from "../Theme/ThemePage";
import {ThemeContext} from "../Context/ThemeContext";
import OnProgress from "../Components/OnProgress";

const Drawer = () => {
   const Drawer = createDrawerNavigator();
   const {theme} = useContext(ThemeContext);
   return (
      <>
         <View style={{flex: 1}}>
            <Drawer.Navigator
               screenOptions={{
                  headerShown: false,
                  drawerType: "back",
                  drawerActiveBackgroundColor:
                     theme?.drawer?.drawerActiveBackgroundColor,
                  drawerActiveTintColor: theme?.drawer?.drawerActiveTintColor,
                  drawerInactiveTintColor:
                     theme?.drawer?.drawerInactiveTintColor,
                  drawerLabelStyle: {
                     marginLeft: -20,
                  },
               }}
               drawerContent={(props) => <CustomDrawer {...props} />}
               initialRouteName="Home"
            >
               <Drawer.Screen
                  name="Home"
                  component={BottomTab}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <FontAwesome
                              name="home"
                              color={color.color}
                              size={25}
                           />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="Star Tasks"
                  component={OnProgress}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <Ant name="star" color={color.color} size={25} />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="Category"
                  component={OnProgress}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <FontAw5
                              name="dice-five"
                              color={color.color}
                              size={25}
                           />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="Theme"
                  component={ThemePage}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <FontAw5
                              name="brush"
                              color={color.color}
                              size={25}
                           />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="Feedback"
                  component={OnProgress}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <Material
                              name="clipboard-edit"
                              color={color.color}
                              size={25}
                           />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="FAQ"
                  component={OnProgress}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <Ant
                              name="questioncircle"
                              color={color.color}
                              size={25}
                           />
                        );
                     },
                  }}
               />
               <Drawer.Screen
                  name="Settings"
                  component={OnProgress}
                  options={{
                     drawerIcon: (color) => {
                        return (
                           <Ion name="settings" color={color.color} size={25} />
                        );
                     },
                  }}
               />
            </Drawer.Navigator>
         </View>
      </>
   );
};

export default Drawer;
