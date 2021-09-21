import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screen/signin';
import DrawerNav from '../navigation/drawer/drawerNav';
import HomeScreenStack from '../navigation/stack/HomeScreenStack';

const Stack = createNativeStackNavigator();

function ShoppingCart(){
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Signin" component={Signin} />
            <Stack.Screen name = "HomeScreenStack" component={HomeScreenStack} options={{headerShown: false}}/>
            <Stack.Screen name = "Drawer" component={DrawerNav} options={{headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}


export default ShoppingCart;