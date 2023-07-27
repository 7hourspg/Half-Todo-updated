import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AllTask from '../TaskComponents/AllTask';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personal from '../TaskComponents/Personal';
import TaskAllRoute from '../TaskComponents/TaskAllRoute';
const Stack = createNativeStackNavigator();
import Work from '../TaskComponents/Work';
const TaskRoute = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="all"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="all" component={AllTask}  />
        <Stack.Screen name="Personal" component={Personal} />
        <Stack.Screen name="Work" component={Work} />
      </Stack.Navigator>
    </>
  );
};
export default TaskRoute;
