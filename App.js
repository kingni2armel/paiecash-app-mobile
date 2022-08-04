import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native'
import CarouselCards from './component/carousel/CarouselCards';
import AuthStack from './navigations/Authstack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
              
                     <NavigationContainer>
                       <AuthStack />
                   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
      marginTop:50
  },
});
