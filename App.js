/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text,StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import ButtonTab from './src/router/buttonTab';
import StackNavigator from './src/router/stack';
import DrawerNavigator from './src/router/Drawer';



function App() {

  return (
    <NavigationContainer>
      <ButtonTab/> 
       {/* <StackNavigator/>  */}
      {/* <DrawerNavigator/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
