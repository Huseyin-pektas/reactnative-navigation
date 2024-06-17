import React from 'react';
import { Text, View, SafeAreaView,Button } from 'react-native';
import Header from '../components/header';

const SettingScreen = (props) => {
  return (
    <SafeAreaView>
      <Header title="Ayarlar" />
      <View>
        <Text>Burası Ayarlar sayfasıdır</Text>
        <Button onPress={() => props.navigation.navigate("Anasayfa")}
          title="Anasayfa ya git"
          color="#841584"
        />
      </View>

    </SafeAreaView>
  );
}

export default SettingScreen;
