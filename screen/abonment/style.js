import { StyleSheet } from "react-native";
import { colors } from "../../styles";
export const styles = StyleSheet.create({
    container: {
    flex:1,
      backgroundColor: '#fff',
      padding: 30,
     
    },
    Operationtitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    Parent:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        backgroundColor: 'white',
        borderRadius: 8,
        width: 300,
        height:100,
        paddingBottom: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    TextPaiment:{
        marginTop:5,
        marginLeft:15,
        fontSize:14,
    },
    CommenartireCarte:{
        marginTop:10,
        marginLeft:15,
        fontSize:14,
    },
    CommenartireCarte2:{
        marginLeft:15,
        fontSize:14,
    },

    TextCarte:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15
    },
    TransitionTest:{
        marginTop:10,
    },
    TextAide:{
        fontWeight:"bold",
        fontSize:16,
    },
    btnPaiement2:{
        backgroundColor:colors.GRISE,
        width:300,
        height:60,
        margin:5,
        borderRadius:5
    },
    textpaiement2:{
        marginTop:8,
        fontWeight:"bold",
        color:colors.PRIMARY,
        fontSize:20,
        textAlign:"center"
    },
    ParentItem2:{
        marginTop:28,
        marginRight:10
    },
    Icon1:{
        color:colors.PRIMARY,
        fontSize:34,

    }
  
  });