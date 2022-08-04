import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/Home';
import SearchScreen from '../screen/Search';
const Drawer = createDrawerNavigator();
function DrawerNavigation() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home" 
          component={HomeScreen}
          />
        <Drawer.Screen 
          name="Search" 
          component={SearchScreen}
        />
      </Drawer.Navigator>
      
    );
  }

  export default DrawerNavigation

