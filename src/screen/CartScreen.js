import React, { useState } from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SUBTRACT_ITEM_QTY, ADD_ITEM_QTY, REMOVE_FROM_CART, SELECTED_ITEMS } from '../redux/actionTypes';
import Icon from 'react-native-vector-icons/Ionicons'

function CartScreen({navigation}){
    const items = useSelector(state => state.items);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    function selectHandler(item){
        dispatch({type:SELECTED_ITEMS, payload: item})
	}
	
	function quantityHandler(action, item){
		if(action == 'more'){
            dispatch({type: ADD_ITEM_QTY, payload: item})
		} else if(action == 'less'){
			dispatch({type: SUBTRACT_ITEM_QTY, payload: item})
		}
	}

    function deleteHandler(item){
        dispatch({type:REMOVE_FROM_CART, payload:item})
    }

    function navigateHandler(item){
        navigation.navigate("HomeScreenStack",{
            screen: 'ProductScreen',
            params: {id:item.id, itemTitle:item.itemTitle, itemDescription:item.itemDescription, itemImage:item.itemImage, 
                    itemPrice:item.itemPrice, itemQty:item.itemQty, itemChecked:item.itemChecked}
        })
    }

    return (
     
        <View>
            <FlatList
                data={items}
                keyExtractor = {(item) => item.id}
                renderItem={({ item, i }) =>(
                        <View key={i} style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 120}}>
                            <View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => selectHandler(item)}>
										<Icon name={item.itemChecked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} 
                                                    color={item.itemChecked == 1 ? "#0faf9a" : "#aaaaaa"} />
									</TouchableOpacity>
								</View>
                            <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                                <TouchableOpacity onPress={() => {navigateHandler(item)}} style={{paddingRight: 10}}>
                                    <Image source={{uri: item.itemImage}} style={[styles.centerElement, {height: 60, width: 60, backgroundColor: '#eeeeee'}]} />
                                </TouchableOpacity>
                                <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
                                    <Text numberOfLines={1} style={{fontSize: 15}}>{item.itemTitle}</Text>
                                    <Text numberOfLines={1} style={{color: '#8f8f8f'}}>{item.color ? 'Variation: ' + item.color : ''}</Text>
                                <Text numberOfLines={1} style={{color: '#333333', marginBottom: 10}}>${item.itemQty * item.itemPrice}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableOpacity onPress={() => quantityHandler('less', item)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                            <Text style={{width:20,textAlign:'center',fontWeight:'bold'}}>-</Text>     
                                        </TouchableOpacity>
                                            <Text style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#cccccc', paddingHorizontal: 7, paddingTop: 3, color: '#000000', fontSize: 13 }}>{item.itemQty}</Text>
                                        <TouchableOpacity onPress={() => quantityHandler('more', item)} style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                                            <Text style={{width:20,textAlign:'center',fontWeight:'bold'}}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.centerElement, {width: 60}]}>
									<TouchableOpacity style={[styles.centerElement, {width: 32, height: 32}]} onPress={() => deleteHandler(item)}>
										<Icon name="md-trash" size={25} color="#ee4d2d" />
									</TouchableOpacity>
								</View>      
                            </View>
                        </View>

                )}
            />
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flexGrow: 1, flexShrink: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text></Text>
                        <View style={{flexDirection: 'row', paddingRight: 20, alignItems: 'center'}}>
                            <Text style={{color: '#8f8f8f'}}>SubTotal: </Text>
                            <Text>${total.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', height: 40, paddingRight: 20, alignItems: 'center'}}>
                    <TouchableOpacity style={[styles.centerElement, {backgroundColor: '#0faf9a', width: 100, height: 30, borderRadius: 5}]} onPress={()=>checkOut()}>
                        <Text style={{color: '#ffffff'}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerElement: {justifyContent: 'center', alignItems: 'center'},
});


export default CartScreen;