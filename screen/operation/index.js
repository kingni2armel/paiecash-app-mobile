import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import logo from  '../../assets/logo.png'
import { SafeAreaView ,  ScrollView} from 'react-native'
import CarouselCards from '../../component/carousel/CarouselCards';
import { colors } from '../../styles';
import { styles } from './style';

function OperationScreen({navigation}) {
    return ( 
        <View style={styles.container}>
            <SafeAreaView  >
                 <CarouselCards />
            </SafeAreaView> 
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    style={styles.btnPaiement}
                >
                    <View style={styles.containerText}>
                        <View>
                            <Text style={styles.textpaiement}>Paiement Unique</Text>
                            <Text style={styles.textEconomie}>Economie de 10%</Text>

                        </View>
                        <View>
                            <Text style={styles.PrixText}>39 Є</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnPaiement2}
                >
                    <View style={styles.containerText}>
                        <View>
                            <Text style={styles.textpaiement2}>Paiement mensualisé</Text>

                        </View>
                        <View>
                            <Text style={styles.PrixText2}>20 Є</Text>
                            <Text style={styles.PrixText2item}>2Є/mois</Text>

                        </View>
                    </View>
                </TouchableOpacity>
           
            </View>
        </View>
         
            
        );
}
export default OperationScreen;