import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import Header from '../components/header';

const HomeScreen = (props) => {
    return (
        <SafeAreaView>
             <Header title ="Anasayfa"/>
            <View>
                <Text>Burası Home sayfasıdır</Text>
                <Button onPress={()=>props.navigation.navigate("Ayarlar")}
                    title="Ayarlara git"
                    color="#841584"
                />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
