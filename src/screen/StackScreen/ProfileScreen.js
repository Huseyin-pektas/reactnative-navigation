import React from "react";
import { View,Button,Text } from "react-native";
import Header from "../../components/header";
const ProfileScreen =({navigation,route})=>{
    return(
        <View>
            <Header title="Stack Profile"/>
            <Text>burası stack navigatörden ProfileScreen sayfasıdır</Text>
            <Button title="stack ayarlara git"
            onPress={()=>navigation.navigate("Stack Ayarlar")}
            />
        </View>
    )
}

export default ProfileScreen