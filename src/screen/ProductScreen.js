import React, { useState, useEffect } from "react";
import {View, ScrollView, Image, Text} from "react-native";
import productStyle from "../style/productStyle";
import AddToCartButton from "../components/AddToCartButton";

function ProductScreen({route, navigation}){
    const {id, itemTitle, itemDescription, itemImage, itemPrice} = route.params;
    const item = route.params;

    return (
            <View style={productStyle.container}>
                <ScrollView>
                    <Image 
                            style={productStyle.image}
                            source={{uri:itemImage}}
                            resizeMode='contain'
                        />
                        <Text style={productStyle.title}>{itemTitle}</Text>
                        <Text style={productStyle.price}>${itemPrice}</Text>
                        <Text style={productStyle.description}>{itemDescription}</Text>
                </ScrollView>
                <View style={productStyle.footer}>
                    <AddToCartButton item={item} />
                </View>
                    
            </View>


    );
}


export default ProductScreen;