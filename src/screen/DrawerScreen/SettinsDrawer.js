

import React from 'react';

const SettinsDrawer = () => {
    return(
        <View>
            <Header title="Drawer Ayarlar"/>
            <Text>burası Drawer navigatörden ProfileScreen sayfasıdır</Text>
            <Button title="Drawer Anasayfa git"
            onPress={()=>navigation.navigate("Drawer Anasayfa")}
            />
        </View>
    )
}

export default SettinsDrawer;
