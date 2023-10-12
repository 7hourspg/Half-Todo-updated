import * as React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {ThemeContext} from "../../Context/ThemeContext";

import All from "../../Pages/HeaderPages/All/All";
import Work from "../../Pages/HeaderPages/Work/Work";
import Personal from "../../Pages/HeaderPages/Personal/Personal";
import Wishlist from "../../Pages/HeaderPages/Wishlist/Wishlist";
import Birthday from "../../Pages/HeaderPages/Birthday/Birthday";

const Tab = createMaterialTopTabNavigator();

function Toptab() {
   const {theme} = React.useContext(ThemeContext);
   return (
      <>
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
