

import React from 'react';

const ProfileDrawer = () => {
    return(
        <View>
            <Header title="Drawer Profile"/>
            <Text>burası Drawer navigatörden Profiledrawer sayfasıdır</Text>
            <Button title="Drawer ayarlara git"
            onPress={()=>navigation.navigate("Drawer Ayarlar")}
            />
        </View>
    )
}

export default ProfileDrawer;
