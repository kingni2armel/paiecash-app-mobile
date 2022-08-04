import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import logo from  '../../assets/logo.png'
import Feather from "react-native-vector-icons/Feather"
import { SafeAreaView ,  ScrollView} from 'react-native'
import CarouselCards from '../../component/carousel/CarouselCards';
import Entypo from "react-native-vector-icons/Entypo"

import { colors } from '../../styles';
import { styles } from './style';

function AbonnementScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.Operationtitle}>
                                Quels types d'operation souhaitez-vous effectuer?
                        </Text>
                        <View style={styles.Parent}>
                                <View style={styles.ParentItem}>
                                            <Text style={styles.TextCarte}>Carte + abonnement</Text>
                                            <Text style={styles.TextPaiment}>Paiement </Text>
                                            <Text style={styles.CommenartireCarte}>Emission et reception des </Text>
                                            <Text  style={styles.CommenartireCarte2}>transferts</Text>
                                </View>
                                <View style={styles.ParentItem2}>
                                        <Entypo name="chevron-right"
                                            onPress={()=>navigation.navigate('Choix')}
                                                style={styles.Icon1}
                                        />
                                </View>
                        </View>
                        <View style={styles.Parent}>
                                <View style={styles.ParentItem}>
                                            <Text style={styles.TextCarte}>Carte </Text>
                                            <Text style={styles.TextPaiment}>Paiement  uniquement </Text>
                                     
                                </View>
                                <View style={styles.ParentItem2}>
                                        <Entypo name="chevron-right"
                                                onPress={()=>navigation.navigate('Choix')}
                                                style={styles.Icon1}
                                        />
                                </View>
                        </View>
                        <View style={styles.Parent}>
                                <View style={styles.ParentItem}>
                                
                                                <Text style={styles.TextPaiment}>J'ai une carte et je souhaite </Text>
                                                <Text style={styles.TextPaiment}>souscrire a un abonnement </Text>

                                        
                                </View>
                                <View style={styles.ParentItem2}>
                                        <Entypo name="chevron-right"
                                                onPress={()=>navigation.navigate('Choix')}
                                                style={styles.Icon1}
                                        />
                                </View>
                        </View>
                        <View style={styles.TransitionTest}>
                                <Text style={styles.TextAide}>Vous souhaitez souscire a PaieCash mais ne disposez pas de car
                                        te bancaire
                                </Text>
                        </View>
                        <View style={styles.TransitionTest}>
                                <Text style={styles.TextAide2}>Vous pourrez effectuer le paiement dans un point de
                                vente de Paiecash a condition de payer comptant
                                </Text>
                        </View>
                        <TouchableOpacity
                                 style={styles.btnPaiement2}
                         >         
                                 <Text style={styles.textpaiement2}>Trouver un point de vente</Text>             
                         </TouchableOpacity>
                        
                    </ScrollView>
        </View>
         
            
        );
}
export default AbonnementScreen;