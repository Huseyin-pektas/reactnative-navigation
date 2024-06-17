import React from "react";
import { View,Button,Text } from "react-native";
import Header from "../../components/header";

const SettingScreen =({navigation,route})=>{
    return(
        <View>
            <Header title="Stack Ayarlar"/>
            <Text>burası stack navigatörden SettingScreen sayfasıdır</Text>
            {/* <Button title="stack anasayfaya git"
            onPress={()=>navigation.navigate("Stack Anasayfa")}
            /> */}

        </View>
    )
}

export default SettingScreen