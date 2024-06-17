import React from "react";

import { Text,View,Button, TouchableOpacity } from "react-native";
const StackMenü =()=>{
    return(
        <View>
            <TouchableOpacity>
                <Text>Anasayfa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Ayarlar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Profil</Text>
            </TouchableOpacity>
        </View>
    )

}
export default StackMenü