import * as React from "react";
import { TouchableOpacity, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Calender from "../Pages/Calender";
import Mine from "../Pages/Mine";
import Toptab from "./Toptab";
import {ThemeContext} from "../Context/ThemeContext";

export default function App({navigation}) {

   const {theme} = React.useContext(ThemeContext);
   const Tab = createBottomTabNavigator();

   return (
      <View style={{flex: 1}}>
         <Tab.Navigator
            initialRouteName="Tasks"
            screenOptions={() => ({
               headerShown: false,
               tabBarActiveTintColor: theme?.PrimaryColor,
               tabBarStyle: {
                  height: 70,
                  paddingHorizontal: 5,
                  paddingTop: 10,
                  backgroundColor: theme?.BackgroundColor,
                  position: "absolute",
                  borderTopWidth: 0,
                  borderRadius: 50,
                  margin: 10,
                  paddingBottom: 7,
               },
            })}
            labeled={false}
         >
            <Tab.Screen
               name="Menu"
               component={Toptab}
               options={{
                  tabBarIcon: ({color}) => {
                     return (
                        <TouchableOpacity
                           onPress={() => navigation.toggleDrawer()}
                        >
                           <View
                              style={{
                                 width: 150,
                                 alignItems: "center",
                                 position: "relative",
                              }}
                           >
                              <EvilIcon
                                 name="navicon"
                                 size={45}
                                 color={color}
                                 style={{
                                    marginHorizontal: 10,
                                    height: 50,
                                    paddingVertical: 10,
                                    paddingBottom: 10,
                                    marginTop: 10,
                                 }}
                              />
                           </View>
                        </TouchableOpacity>
                     );
                  },
                  tabBarLabel: "",
               }}
            />
            <Tab.Screen
               name="Tasks"
               component={Toptab}
               options={{
                  tabBarIcon: ({color}) => {
                     return (
                        <MaterialIcon
                           name="clipboard-text-multiple"
                           size={28}
                           color={color}
                        />
                     );
                  },
                  tabBarLabelStyle: {fontSize: 13},
               }}
            />
            <Tab.Screen
               name="Calendar"
               component={Calender}
               options={{
                  tabBarIcon: ({color}) => {
                     return (
                        <Foundation name="calendar" size={30} color={color} />
                     );
                  },
                  tabBarLabelStyle: {fontSize: 13},
                  tabBarBadge: new Date().getDate(),
                  tabBarBadgeStyle: {
                     backgroundColor: theme?.PrimaryColor,
                  },
               }}
            />
            <Tab.Screen
               name="Mine"
               component={Mine}
               options={{
                  tabBarIcon: ({color}) => {
                     return (
                        <MaterialIcon name="account" size={30} color={color} />
                     );
                  },
                  tabBarLabelStyle: {fontSize: 13},
               }}
            />
         </Tab.Navigator>
      </View>
   );
}
