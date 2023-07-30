import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import TaskRoute from "../Pages/TasksRoute";
import Calender from "../Pages/Calender";
import Mine from "../Pages/Mine";
import Home from "../Pages/TasksRoute";
import Toptab from "./Toptab";
import {ThemeContext} from "../Context/ThemeContext";
import AddTask from "./AddTask/AddTask";

export default function App({navigation}) {
  const {theme, isLoading} = React.useContext(ThemeContext);
  // console.log(theme);
  const Tab = createBottomTabNavigator();
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        // shifting={true}
        initialRouteName="Tasks"
        // barStyle={{backgroundColor: "black", height: 70}}
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: theme?.ActiveColor || "purple",
          tabBarStyle: {
            height: 70,
            paddingHorizontal: 5,
            paddingTop: 10,
            backgroundColor: "black",
            position: "absolute",
            borderTopWidth: 0,
            borderRadius: 50,
            margin: 10,
            paddingBottom: 7,
          },
        })}
        //  tabBarActiveTintColor="red"
        labeled={false}
      >
        <Tab.Screen
          name="Menu"
          component={Toptab}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <View
                    style={{
                      width: 150,
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <EvilIcon
                      name="navicon"
                      size={40}
                      // color={"gray"}
                      color={theme?.InActiveColor || "red"}
                      style={{
                        marginHorizontal: 10,
                        // paddingHorizontal: 10,
                        // backgroundColor:"red",
                        // position:"absolute",
                        // width:80,
                        // height:100,
                        // top:-10,
                        // right:0,
                        // left:45,
                        // justifyContent:"center"
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            // tabBarLabelStyle: {fontSize: 13, color: theme?.TextColor},
            // tabBarActiveTintColor:"red",
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
            // tabBarLabel:""
            tabBarLabelStyle: {fontSize: 13},
            // tabBarActiveBackgroundColor:"green",
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calender}
          options={{
            tabBarIcon: ({color}) => {
              return <Foundation name="calendar" size={30} color={color} />;
            },
            // tabBarLabel: "",
            tabBarLabelStyle: {fontSize: 13},
            tabBarBadge: new Date().getDate(),
            tabBarBadgeStyle: {
              backgroundColor: "green",
            },
          }}
        />
        <Tab.Screen
          name="Mine"
          component={Mine}
          options={{
            tabBarIcon: ({color}) => {
              return <MaterialIcon name="account" size={30} color={color} />;
            },
            // tabBarLabel: "",
            tabBarLabelStyle: {fontSize: 13},
          }}
        />
      </Tab.Navigator>
      {/* <AddTask/> */}
    </View>
  );
}
