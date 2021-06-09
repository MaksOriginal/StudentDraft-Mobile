import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StudentScreen from '../Persons/StudentScreen';
import ProjectsScreen from '../Projects/ProjectsScreen';
import Project1Screen from '../Projects/Project1Screen';
import Project2Screen from '../Projects/Project2Screen';
import Project3Screen from '../Projects/Project3Screen';
import Project4Screen from '../Projects/Project4Screen';
import Project5Screen from '../Projects/Project5Screen';
import Project6Screen from '../Projects/Project6Screen';
import Project7Screen from '../Projects/Project7Screen';
import Project8Screen from '../Projects/Project8Screen';
import CustomSidebarMenu from '../Components/CustomSidebarMenu';

import Calendar from '../Persons/StudentPages/Calendar';
import Contacts from '../Persons/StudentPages/Contacts';
import Help from '../Persons/StudentPages/Help';
import Messages from '../Persons/StudentPages/Messages';
import ProgressPage from '../Persons/StudentPages/ProgressPage';
import Support from '../Persons/StudentPages/Support';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StudentScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="StudentScreen">
      <Stack.Screen
        name="StudentScreen"
        component={StudentScreen}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Progress"
        component={ProgressPage}
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        name="Support"
        component={Support}
        options={{headerShown: false}}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const ProjectsScreenStack = () => {
    return (
      <Stack.Navigator initialRouteName="ProjectsScreen">
        <Stack.Screen
          name="ProjectsScreen"
          component={ProjectsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Project1Screen"
          component={Project1Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Project2Screen"
          component={Project2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="Project3Screen"
        component={Project3Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project4Screen"
        component={Project4Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project5Screen"
        component={Project5Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project6Screen"
        component={Project6Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project7Screen"
        component={Project7Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project8Screen"
        component={Project8Screen}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    );
  };

const DrawerStudentRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="StudentScreenStack"
        options={{drawerLabel: 'Личный кабинет'}}
        component={StudentScreenStack}
      />
      <Drawer.Screen
        name="ProjectsScreenStack"
        options={{drawerLabel: 'Каталог проектов'}}
        component={ProjectsScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStudentRoutes;