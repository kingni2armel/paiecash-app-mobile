import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { colors } from '../../styles';
import { styles } from './style';
import logos from "../../assets/logo.png"

function WelcomeScreen({navigation}) {
    return ( 
        <View style = {styles.container}>
        <Swiper 
            style={styles.wrapper} 
            showsButtons={false}
            activeDotColor={colors.PRIMARY}
            dotColor={colors.ORANGE}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
         
        >
            <View style={styles.slide1}>
                <View style={styles.slideTop}>
                         <Image source={logos} style={styles.ImageSlide1} />  

                </View>
            </View>
            <View style={styles.slide2}>
                <View style={styles.slideTop}>
                    <Text style={styles.textSlide1}>Gratuite et sécurisée</Text>
                    <Text style={styles.text2slide2}>
                      Votre application de transfert d'argent
                    </Text>
                </View>
            </View>
          
            <View style={styles.slide3}>
                <View style={styles.slideTop}>
                    <Text style={styles.textSlide3}>Welcome to PaieCash </Text>
                    <Text style={styles.text2slide2}>
                      Bienvenue sur PaieCash
                    </Text>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Login')}
                        style={styles.btnStart}
                    >
                            <Text style={styles.textStart}>Commencer</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity 
                        onPress={()=>navigation.navigate('Abonnement')}
                        style={styles.btnStart}
                    >
                            <Text style={styles.textStart}>Abonnement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Operation')}
                        style={styles.btnStart}
                    >
                            <Text style={styles.textStart}>Opération</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </Swiper>   
    </View> 
        );
}
export default WelcomeScreen;