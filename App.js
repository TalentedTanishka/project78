import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';
import { BlurView } from 'expo-blur';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
      <Stack.Screen name = 'Home' component={HomeScreen}/>
      <Stack.Screen name = 'StarMap' component={StarMap} />
      <Stack.Screen name = 'SpaceCraft' component={SpaceCraft}/>
      <Stack.Screen name = 'DailyPic' component={DailyPic}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


