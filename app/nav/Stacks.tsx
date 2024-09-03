import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import NewNote from '../screens/NewNote';
import EditNote from '../screens/EditNote';

let Stack = createNativeStackNavigator();
export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={NewNote} name="NewNote" />
      <Stack.Screen component={EditNote} name="EditNote" />
    </Stack.Navigator>
  );
}
