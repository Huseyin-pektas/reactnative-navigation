import React from 'react';
import { Text} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const ButtonTab =()=>{
    return(
        <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarStyle:{
            height:80,
            backgroundColor:"#c0c0c0"
          }
        }} >
        <Tab.Screen options={{
          tabBarLabel: 
          ({ focused, }) => 
            (<Text style={{ fontSize: focused ? 20 : 16 ,
              color:focused ? "red": "gray"
            }} 
            >Anasayfa</Text>),
           tabBarIcon:({focused,color,size})=>(<Icon 
            name ={focused ? "home":"home-outline"} 
            color ={focused ? "red": "gray"}
            size ={focused ? 24:16}
            />)
        }} name='Anasayfa'
          component={HomeScreen}
          />
        <Tab.Screen
        
        options={{
          tabBarLabel: 
          ({ focused, }) => 
            (<Text style={{ fontSize: focused ? 20 : 16 ,
              color:focused ? "red": "gray"
            }} 
            >Ayarlar</Text>),
            tabBarIcon:({focused,color,size})=>(<Icon 
              name ={focused ? "list-circle":"list-circle-outline"} 
              color ={focused ? "red": "gray"}
              size ={focused ? 24:16}
              />)
        }} name='Ayarlar' component={SettingScreen} />
      </Tab.Navigator>
    )
}
export default ButtonTab