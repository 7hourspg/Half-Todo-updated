import { View, Text, StatusBar } from 'react-native';
import React,{useContext} from 'react';
import BottomTab from '../Components/BottomTab'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAw5 from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../Drawer/CustomDrawer';
import ThemePage from '../Theme/ThemePage';
import { ThemeContext } from '../Context/ThemeContext';
import Hola from '../Pages/Hola';
const Drawer = () => {
  const Drawer = createDrawerNavigator();
  const {theme}=useContext(ThemeContext)
  return (
    <>
      <View style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerType: 'back',
            drawerActiveBackgroundColor: theme?.PrimaryColor,
            // drawerInactiveBackgroundColor: "red",
            // drawerActiveTintColor: "black",
            // drawerStatusBarAnimation: "fade",
            drawerActiveTintColor: "black",
            drawerInactiveTintColor: "white",
            // borderWidth:2,
            // drawerItemStyle: {},
            drawerLabelStyle: {
              marginLeft: -20,
              // color:theme?.DrawerTextColor || theme?.TextColorPrimary,
              
            },
          }}
          drawerContent={(props) => <CustomDrawer {...props} />}

          initialRouteName='Home'
        >
          <Drawer.Screen
            name="Home"
            component={BottomTab}
            options={{
              drawerIcon: (color) => {
                // console.log(color, "COLOR")
                return <FontAwesome name="home" color={color.color} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Star Tasks"
            component={Hola}
            options={{
              drawerIcon: (color) => {
                return <Ant name="star" color={color.color} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Category"
            component={BottomTab}
            options={{
              drawerIcon: (color) => {
                return <FontAw5 name="dice-five" color={color.color} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Theme"
            component={ThemePage}
            options={{
              drawerIcon: (color) => {
                return <FontAw5 name="brush" color={color.color} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Feedback"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return (
                  <Material name="clipboard-edit" color={theme?.IconColor} size={25} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="FAQ"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <Ant name="questioncircle" color={theme?.IconColor} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <Ion name="settings" color={theme?.IconColor} size={25} />;
              },
            }}
          />
        </Drawer.Navigator>
      </View>
    </>
  );
};

export default Drawer;
