import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    footer: {
      justifyContent: 'space-between',
      marginBottom:10
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom:5,
      fontWeight:"bold",
      marginLeft:10
    },
    image: {
      marginTop:5,
      paddingTop:0,
      aspectRatio: 1,
      backgroundColor:"#FFFFFF",
      justifyContent: 'center',
    },
    price: {
      textAlign:"left",
      fontSize:18,
      fontWeight:"bold",
      marginLeft:10,
      marginTop:5
    },
    description: {
        marginTop:15,
        marginLeft:10,
    },
    button: {
        backgroundColor: '#307ecc',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 25,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
  });
