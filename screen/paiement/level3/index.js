import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { SafeAreaView ,  ScrollView} from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import { colors } from '../../../styles';
import imageLogo from "../../../assets/logo.png"

import { styles } from './style';

function LevelTreeScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                <ScrollView>
                
                        <View>
                                <Feather 
                                        name="check"
                                        onPress={()=>navigation.navigate('Choix')}
                                        style={styles.ImageSlide1}
                                /> 
                                <Text style={styles.MesssageSuccess}>
                                        Votre Paiement a été effectué 
                                </Text> 
                                <Text style={styles.MesssageSuccess2}>
                                        avec success !
                                </Text> 

                        </View>
                        <View style={styles.containerPrix}>
                                <Text style={styles.Prix}>12,93 Є</Text>
                                <Text style={styles.textPaye1}>Payé a</Text>
                                <Text style={styles.textPaye1}>Carrefour Maarket</Text>
                        </View>

                        <View style={styles.containerButton}>
                                <TouchableOpacity 
                                        onPress={()=>navigation.navigate('Operation')}
                                        style={styles.btnPaiement2}
                                >
                                <Text style={styles.textStart}>Retour a l'accueil</Text>
                                </TouchableOpacity>   
                                <TouchableOpacity 
                                        onPress={()=>navigation.navigate('Operation')}
                                        style={styles.btnPaiement1}
                                >
                                <Text style={styles.textStart2}>
                                <Feather 
                                        name="inbox"
                                        onPress={()=>navigation.navigate('Choix')}
                                        style={styles.IconImprimer}
                                /> 
                                        Obtenir un recu
                                </Text>
                                </TouchableOpacity>  
                        </View>
                        <View>
                                <Text style={styles.LastText}>
                                
                                       Vous pouvez retrouver  tout vos recu ainsi que les traces
                                       de vos differentes transactrions.merci  
                                </Text>
                        </View>

                </ScrollView>
        </View>
         
            
        );
}
export default LevelTreeScreen;