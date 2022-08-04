import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
export const styles = StyleSheet.create({
    container: {
    flex:1,
      backgroundColor: '#fff',
      padding: 30,
      alignItem:"center"
     
    },
    Operationtitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    ImageSlide1:{
        height:200,
        width:200,
        marginLeft:15,
        marginLeft:50
      },
    Parent:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:50,
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
        marginLeft:15,
        color:colors.PRIMARY
    },
    TransitionTest:{
        marginTop:10,
        
    },
    TextAide2:{
        textAlign:"center",
        fontSize:16,
    },
    btnPaiement2:{
        backgroundColor:colors.PRIMARY,
        width:300,
        height:60,
        margin:5,
        borderRadius:5,
        color:colors.WHITE
    },
    btnPaiement1:{
        backgroundColor:colors.GRISE,
        width:300,
        height:60,
        margin:5,
        borderRadius:5,
        color:colors.PRIMARY
    },
    textpaiement2:{
        marginTop:15,
        fontWeight:"bold",
        color:colors.WHITE,
        fontSize:20,
        textAlign:"center"
    },
    textpaiement1:{
        marginTop:15,
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

    },
    ContainerButton:{
        marginTop:105
    },
    containerInput:{
        marginTop:25
    },
    InputStyle:{
        width:300,
        borderWidth:1,
        borderColor:colors.PRIMARY,
        height:50,
        borderRadius:5,
        marginTop:1,
        paddingLeft:15,
    },

  });