import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import productStyle from "../style/productStyle";
import { ADD_TO_CART } from "../redux/actionTypes";
import { useDispatch, useSelector } from 'react-redux'

function AddToCartButton(props){
    const item = props.item;
    const dispatch = useDispatch();
    
    const addToCart = (item) =>{
        dispatch({type: ADD_TO_CART, payload: item})
    }
    return (
        <View>
            <TouchableOpacity style={productStyle.button} onPress={() => addToCart(item)}>
                <Text style={productStyle.buttonTitle}>ADD TO CART</Text>
            </TouchableOpacity>
        </View>
    );
}


export default AddToCartButton;
