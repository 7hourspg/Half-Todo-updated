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
// import CustomDrawer from '../Drawer/CustomDrawer';
import PureColor from '../Theme/PureColor';
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
            drawerType: 'slide',
            drawerActiveBackgroundColor: "green",
            drawerActiveTintColor: 'gray',
            drawerItemStyle: {},
            drawerLabelStyle: {
              marginLeft: -20,
              color:"white"||`${theme?.TextColor}`
            },
          }}
          // drawerContent={(props) => <CustomDrawer {...props} />}

          // Comment the above line because we are not using custom drawer for some reason

          initialRouteName='Home'
        >
          <Drawer.Screen
            name="Home"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <FontAwesome name="home" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Star Tasks"
            component={Hola}
            options={{
              drawerIcon: () => {
                return <Ant name="star" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Category"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <FontAw5 name="dice-five" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Theme"
            component={PureColor}
            options={{
              drawerIcon: () => {
                return <FontAw5 name="brush" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Feedback"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return (
                  <Material name="clipboard-edit" color={theme?.TextColor ||'purple'} size={25} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="FAQ"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <Ant name="questioncircle" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={BottomTab}
            options={{
              drawerIcon: () => {
                return <Ion name="settings" color={theme?.TextColor ||'purple'} size={25} />;
              },
            }}
          />
        </Drawer.Navigator>
      </View>
    </>
  );
};

export default Drawer;
