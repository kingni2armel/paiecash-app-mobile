import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import logo from  '../../assets/logo.png'
import { SafeAreaView ,  ScrollView} from 'react-native'
import CarouselCards from '../../component/carousel/CarouselCards';
import Entypo from "react-native-vector-icons/Entypo"

import { colors } from '../../styles';
import { styles } from './style';

function AbonnementItemScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.Operationtitle}>
                               Vous avez choisi
                        </Text>
                        <View style={styles.Parent}>
                                <View style={styles.ParentItem}>
                                            <Text style={styles.TextCarte}>Carte + abonnement Fun d'1 an</Text>
                                            <Text style={styles.TextPaiment}>Paiement unique a 39  Є  </Text>
                                           
                                </View>
                             
                        </View>

                        <View style={styles.TransitionTest}>
                                <Text style={styles.TextAide2}>Avant d'effectuer le paiement en ligne nous sommes
                                    dans l'obligation de vous demander plusieurs informations personnelles pour 
                                    pouvoir ouvir votre compte
                                </Text>
                        </View>
                        <View style={styles.ContainerButton}>
                                <TouchableOpacity
                                            onPress={()=>navigation.navigate('Niveau-1')}
                                            style={styles.btnPaiement2}
                                    >                                 
                                        <Text style={styles.textpaiement2}>Continuer</Text>            
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style={styles.btnPaiement1}
                                >                 
                                        <Text style={styles.textpaiement1}>Retourner  a l'accueil</Text>                             
                                </TouchableOpacity>
                        </View>
                        
                    </ScrollView>
        </View>
         
            
        );
}
export default AbonnementItemScreen;