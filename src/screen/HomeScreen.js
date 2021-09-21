import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import AddToCartButton from '../components/AddToCartButton';
import ProductApi from '../library/api/ProductApi';
import homeStyle from '../style/homeStyle';

function Home({navigation}){
    const [productList, setProductList] = useState([]);
    const getData = async () =>{
        try {
            const response = await ProductApi.getProduct();
            setProductList(response);   
         }catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() =>{

        getData();    

    }, [])

    return(
        <View style={homeStyle.container}>
            <FlatList
                data={productList}
                keyExtractor = {(item) => item.id}
                renderItem={({ item }) =>(
                    <TouchableOpacity
                        onPress={() =>{
                            navigation.navigate("HomeScreenStack",{
                                screen: 'ProductScreen',
                                params: {id:item.id, itemTitle:item.title, itemDescription:item.description, itemImage:item.image, itemPrice:item.price, itemQty:1, itemChecked:0}
                            });
                        }}
                    >

                        <View style={homeStyle.item}>
                            <Text style={homeStyle.title}>{item.title}</Text>
                            <Image
                                style={homeStyle.image}
                                source={{uri:item.image}}
                                resizeMode='contain'
                            />
                            <Text style={homeStyle.price}>${item.price}</Text>
                        </View>

                    </TouchableOpacity>


                )}
                   
            />
      </View>
    );
}




export default Home;