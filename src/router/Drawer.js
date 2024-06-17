import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawer from "../screen/DrawerScreen/HomeDrawer";
import SettinsDrawer from "../screen/DrawerScreen/SettinsDrawer";
import ProfileDrawer from "../screen/DrawerScreen/ProfileDrawer";
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
          <Drawer.Screen  options={{headerShown:false}}
          name='Drawer Anasayfa' component={HomeDrawer}/>
          {/* <Drawer.Screen options={{headerShown:false}} 
          name='Drawer Ayarlar' component={SettinsDrawer}/>
          <Drawer.Screen options={{headerShown:false}} 
          name='Drawer Profil' component={ProfileDrawer}/> */}
  
      </Drawer.Navigator>
    );
  }
  
  export default DrawerNavigator;