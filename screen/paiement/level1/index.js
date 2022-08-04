import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { SafeAreaView ,  ScrollView} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { colors } from '../../../styles';
import imageLogo from "../../../assets/logo.png"

import { styles } from './style';

function LevelOneScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                    <ScrollView>
                     
                                <View>
                                        <Image source={imageLogo} style={styles.ImageSlide1} />  

                                </View>

                        <View style={styles.TransitionTest}>
                                <Text style={styles.TextAide2}>Vous allez payer 
                                </Text>
                                <Text style={styles.TextAide2}>
                                                a carrefour market
                                </Text>
                        </View>

                        <View  style={styles.containerInput}>
                                <Text>Veuillez saisir le montant</Text>
                                <TextInput
                                        placeholder='12,90'     
                                        style={styles.InputStyle}
                                />
                        </View>
                        <View style={styles.ContainerButton}>
                                <TouchableOpacity
                                        onPress={()=>navigation.navigate('Niveau-2')}
                                        style={styles.btnPaiement2}
                                    >                                 
                                        <Text style={styles.textpaiement2}>Payer</Text>            
                                </TouchableOpacity>
                             
                        </View>
                        
                    </ScrollView>
        </View>
         
            
        );
}
export default LevelOneScreen;