import React from "react";
import { View,Button,Text } from "react-native";
import Header from "../../components/header";
import StackMenü from "../../components/StackMenu/İndex";
const HomeScreen =({navigation,route})=>{
    return(
        <View>
            <Header title="Stack Anasayfa"/>
            <Text>burası stack navigatörden homescrenn sayfasıdır</Text>
            <Button title="stack profile git"
            onPress={()=>navigation.navigate("Stack Profil")}
            />
        </View>
    )
}

export default HomeScreen