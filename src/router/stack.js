import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/StackScreen/HomeScreen';
import SettingScreen from '../screen/StackScreen/SettinsSreen';
import ProfileScreen from '../screen/StackScreen/ProfileScreen';

const Stack = createStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        options={{headerShown:false}}
        name='Stack Anasayfa' component={HomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Stack Ayarlar' component={SettingScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Stack Profil' component={ProfileScreen}/>

    </Stack.Navigator>
  );
}

export default StackNavigator;
