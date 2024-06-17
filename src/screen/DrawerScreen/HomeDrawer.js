import React from 'react';

const HomeDrawer = () => {
    return(
        <View>
            <Header title="Drawer Home"/>
            <Text>burası Drawer navigatörden homeDrawer sayfasıdır</Text>
            <Button title="Drawer profile git"
            onPress={()=>navigation.navigate("Drawer Profil")}
            />
        </View>
    )
}

export default HomeDrawer;
