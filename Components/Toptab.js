import * as React from "react";
import {
   Image,
   ScrollView,
   Text,
   View,
   ImageBackground,
   Button,
} from "react-native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {ThemeContext} from "../Context/ThemeContext";
import All from "../Pages/HeaderPages/All/All";
import AddTask from "./AddTask/AddTask";
import Work from "../Pages/Work";
import Personal from "../Pages/HeaderPages/Personal/Personal";
import Wishlist from "../Pages/HeaderPages/Wishlist/Wishlist";
import Birthday from "../Pages/HeaderPages/Birthday/Birthday";

function FeedScreen({navigation}) {
   const {Scenery, theme} = React.useContext(ThemeContext);

   // console.log(Color);

   return (
      <ImageBackground
         resizeMode="cover"
         source={{uri: Scenery?.SceneryImage}}
         style={{flex: 1, justifyContent: "center"}}
      >
         <View
            style={{
               flex: 1,
               justifyContent: "center",
               alignItems: "center",
               backgroundColor: Scenery
                  ? "transparent"
                  : `${theme?.BackgroundColor}`,
            }}
         >
            <Text>Feed!</Text>

            <Button onPress={() => navigation.toggleDrawer()} title="Hello" />
         </View>
      </ImageBackground>
   );
}

function NotificationsScreen() {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
         }}
      >
         <Text>Notifications!</Text>
         <AddTask />
      </View>
   );
}

function ProfileScreen() {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
         }}
      >
         <Text>Profile!</Text>
         <AddTask />
      </View>
   );
}
function ProfileScreen2() {
   return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <Text>Profile2!</Text>
         <AddTask />
      </View>
   );
}
function ProfileScreen3() {
   return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <Text>Profile2!</Text>
      </View>
   );
}

const Tab = createMaterialTopTabNavigator();

function Toptab() {
   const {theme} = React.useContext(ThemeContext);
   return (
      <>
         {/* <View style={{}}> */}
         <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
               tabBarActiveTintColor: theme?.TextColorPrimary,
               tabBarInactiveTintColor: theme?.InActiveColor,

               tabBarLabelStyle: {
                  fontSize: 13,
                  fontWeight: "700",
                  textTransform: "capitalize",
               },
               // 3B3D3C
               tabBarStyle: {
                  backgroundColor: theme?.BackgroundColor,
                  backfaceVisibility: "visible",
                  elevation: 0,
                  padding: 5,
                  borderRadius: 30,

                  borderWidth: 1,
                  position: "absolute",
                  borderColor: theme?.PrimaryColor,
                  margin: 10,
               },
               tabBarPressColor: theme?.PrimaryColor,
               tabBarItemStyle: {width: 110},
               tabBarScrollEnabled: true,
               tabBarIndicatorStyle: {
                  backgroundColor: theme?.PrimaryColor,
                  position: "absolute",
                  top: 0,
                  height: 48,
                  width: 100,
                  marginTop: 5,
                  marginLeft: 5,

                  borderRadius: 50,
               },
            }}
         >
            <Tab.Screen
               name="HomePage"
               component={All}
               options={{
                  tabBarLabel: "All",
                  // tabBarLabelStyle:{
                  //   // backgroundColor:'red'
                  // }
               }}
            />
            <Tab.Screen
               name="Work"
               component={Work}
               options={{tabBarLabel: "Work"}}
            />
            <Tab.Screen
               name="Personal"
               component={Personal}
               options={{tabBarLabel: "Personal"}}
            />
            <Tab.Screen
               name="Wishlist"
               component={Wishlist}
               options={{tabBarLabel: "Wishlist"}}
            />
            <Tab.Screen
               name="Birthday"
               component={Birthday}
               options={{tabBarLabel: "Birthday"}}
            />
         </Tab.Navigator>
      </>
   );
}
export default Toptab;
