import { StyleSheet } from "react-native";
import { colors } from "../../styles";
export const styles = StyleSheet.create({
    container: {
    flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
  
    },
    containerBtn:{
        marginTop:-50,
    },
    btnPaiement:{
        backgroundColor:colors.PRIMARY,
        width:300,
        height:60,
        margin:5,
        borderRadius:5

    },
    btnPaiement2:{
        backgroundColor:colors.GRISE,
        width:300,
        height:60,
        margin:5,
        borderRadius:5
    },
    containerText:{
        display:'flex',
        justifyContent:"space-around",
        flexDirection:"row",
    },
    textpaiement:{
        marginTop:8,
        fontWeight:"bold",
        color:colors.WHITE,
        fontSize:20
    },
    textpaiement2:{
        marginTop:8,
        fontWeight:"bold",
        color:colors.PRIMARY,
        fontSize:20
    },
    PrixText:{
        marginTop:10,
        fontWeight:"bold",
        color:colors.WHITE,
        fontSize:20
    },
    PrixText2:{
        color:colors.PRIMARY,
        fontWeight:"bold",
        marginTop:10,
    },
    PrixText2item:{
        color:colors.PRIMARY,
        fontWeight:"bold",

    },
    textEconomie:{
        fontWeight:"bold",
        color:colors.WHITE,
        fontSize:10
    }
  });