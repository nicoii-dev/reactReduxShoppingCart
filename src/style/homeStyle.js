import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    title: {
      fontSize: 15,
      marginBottom:5,
      fontWeight:"bold",
    },
    image: {
      marginTop:20,
      paddingTop:0,
      aspectRatio: 1,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    price: {
      textAlign:"right",
      fontSize:20,
      fontWeight:"bold",
    }
  });
