import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screen/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import CartScreen from '../../screen/CartScreen';
import ShoppingCartIcon from '../../components/ShoppingCartIcon';

const Stack = createNativeStackNavigator();

function HomeScreenStack({navigation}){
    return(
        <Stack.Navigator initialRouteName = "ProductScreen">
            <Stack.Screen 
                name = "HomeScreen"
                component={Home}/>
            <Stack.Screen 
                name = "ProductScreen" 
                component={ProductScreen}
                options={{
                    title:"",
                     headerRight: () => (
                        <TouchableOpacity
                            onPress = {() =>{
                                navigation.navigate('Cart');
                            }}
                        >
                            <ShoppingCartIcon />
                        </TouchableOpacity>
                       
                     ),
                }}
            />
            <Stack.Screen 
                name = "Cart" 
                component={CartScreen}
                options={{
                    title:"",
                    
                }}/>
                
        </Stack.Navigator>
    );
}

export default HomeScreenStack;
