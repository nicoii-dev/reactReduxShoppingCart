import * as React from 'react';
import {View, Text, Alert} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Home from '../../screen/HomeScreen';
import { Icon } from 'react-native-elements'
import IonIcons from 'react-native-vector-icons/Ionicons'
import CartScreen from '../../screen/CartScreen';

const Drawer = createDrawerNavigator();

function NotificationsScreen({navigation}){
    return(
        <View>
            <Text>Notification Screen</Text>
        </View>
    );
}


function DrawerNav({navigation}) {

    function CustomDrawerContent(props){
        return(
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem 
                    style={{}} 
                    label="Logout" 
                    onPress={() => Logout()}
                    icon={({ focused, color, size }) => <Icon color={color} size={30} name={focused ? 'logout' : 'logout'} />}
                />
            </DrawerContentScrollView>  
        );
    }

    function Logout(){
        Alert.alert(
            "Are you sure you want to logout?",
            "", 
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => navigation.navigate("Signin")}
            ]
          );
    }

  return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen 
            name="Home" 
            component={Home} 
            options={{
                drawerIcon: ({focused, size}) => (
                    <Icon name='home' size={30}/>
                ),
            }}
        />
        <Drawer.Screen 
            name="Notifications" 
            component={NotificationsScreen}
            options={{
                drawerIcon: ({focused, size}) => (
                    <Icon name='notifications' size={30}/>
                ),
            }} />
        <Drawer.Screen 
            name="Cart" 
            component={CartScreen}
            options={{
                drawerIcon: ({focused, size}) => (
                    <IonIcons name='ios-cart' size={30}/>
                ),
            }} />
      </Drawer.Navigator>
  );
}

export default DrawerNav;