import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { colors } from '../../styles'
import Feather from "react-native-vector-icons/Feather"


export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.containers} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.abonnement}>{item.visite}</Text>

        <View style={styles.contanerTrasit}>
            <Text style={styles.abonnement}>
                <Feather 
                          name="check"
                          onPress={()=>navigation.navigate('Choix')}
                          style={styles.iconCheck}
                  /> 
              {item.abonnement}
            </Text>
            <Text style={styles.body}>
              <Feather 
                        name="check"
                        onPress={()=>navigation.navigate('Choix')}
                        style={styles.iconCheck}
                /> 
              {item.body}
            </Text>
        </View>

    </View>
  )
}
export   default CarouselCardItem

const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color:colors.PRIMARY,
    textAlign:"center",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  iconCheck:{
    color:colors.PRIMARY,
    fontSize:18
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"center"
  },
  abonnement:{
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign:"center"
  },
  contanerTrasit:{
    marginTop:15,
  }
})