import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { SafeAreaView ,  ScrollView} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { colors } from '../../../styles';
import imageLogo from "../../../assets/logo.png"

import { styles } from './style';

function LevelTwoScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                    <ScrollView>
                     
                                <View>
                                        <Image source={imageLogo} style={styles.ImageSlide1} />  

                                </View>

                        <View style={styles.TransitionTest}>
                                <Text style={styles.TextAide2}>Vous allez payer 
                                </Text>
                                <Text style={styles.TextAidePrix}>
                                                12,90 Є
                                </Text>
                                <Text style={styles.TextAide2}>
                                       a Carrefour Market
                                </Text>
                                
                        </View>
                        <View style={styles.containerItem}>

                                <View  style={styles.containerInput}>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text style={styles.Number}>1</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>3</Text>
                                        </TouchableOpacity>
                                
                                </View>
                                <View  style={styles.containerInput}>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text style={styles.Number}>4</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>5</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>6</Text>
                                        </TouchableOpacity>
                                
                                </View>
                                <View  style={styles.containerInput}>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text style={styles.Number}>7</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>8</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle}
                                        >
                                        <Text  style={styles.Number}>9</Text>
                                        </TouchableOpacity>
                                
                                </View>
                                <View  style={styles.containerInput}>
                                        <TouchableOpacity
                                        
                                        >
                                        
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                                style={styles.InputStyle2}
                                        >
                                        <Text  style={styles.Number}>0</Text>
                                        </TouchableOpacity>

                                        <Entypo
                                                 name="level-up"
                                                onPress={()=>navigation.navigate('Niveau-3')}
                                                style={styles.Icon1}
                                        />
                                
                                </View>
                        </View>
                      
                        
                    </ScrollView>
        </View>
         
            
        );
}
export default LevelTwoScreen;