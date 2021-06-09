import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import DrawerStudentRoutes from './Screen/DrawerScreen/DrawerStudentRoutes';
import DrawerTeacherRoutes from './Screen/DrawerScreen/DrawerTeacherRoutes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerStudentRoutes"
          component={DrawerStudentRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerTeacherRoutes"
          component={DrawerTeacherRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}