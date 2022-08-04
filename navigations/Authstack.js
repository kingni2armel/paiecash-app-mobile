// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/welcome';
import OperationScreen from '../screen/operation';
import AbonnementScreen from '../screen/abonment';
import AbonnementItemScreen from '../screen/abonnementItem';
import LevelOneScreen from '../screen/paiement/level1';
import LevelTwoScreen from '../screen/paiement/level2';
import LevelTreeScreen from '../screen/paiement/level3';
import LoginScreen from '../screen/login';
import HomeScreen from '../screen/Home';
// import DrawerNavigation from '../DrawerNavigation';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
                name="Welcome"
                options={{headerShown:true}}
                component={WelcomeScreen}
        /> 
         <Stack.Screen
                name="Login"
                options={{headerShown:false}}
                component={LoginScreen}
        /> 
          <Stack.Screen
                name="Home"
                options={{headerShown:false}}
                component={HomeScreen}
        /> 
           <Stack.Screen
                name="Abonnement"
                options={{headerShown:true}}
                component={OperationScreen}
        />
            <Stack.Screen
                name="Operation"
                options={{headerShown:true}}
                component={AbonnementScreen}
        />
           <Stack.Screen
                name="Choix"
                options={{headerShown:true}}
                component={AbonnementItemScreen}
         />
          <Stack.Screen
                name="Niveau-1"
                options={{headerShown:true}}
                component={LevelOneScreen}
         />
           <Stack.Screen
                name="Niveau-2"
                options={{headerShown:true}}
                component={LevelTwoScreen}
         />
          <Stack.Screen
                name="Niveau-3"
                options={{headerShown:true}}
                component={LevelTreeScreen}
         />
      </Stack.Navigator> 
  );
}

export default AuthStack;