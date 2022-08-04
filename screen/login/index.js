import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { SafeAreaView ,  ScrollView} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { colors } from '../../styles';
import imageLogo from "../../assets/logo.png"

import { styles } from './style';

function LoginScreen({navigation}) {
    return ( 
        <View style={styles.container}>
                 
                <View style={styles.TransitionTest}>
                        <Text style={styles.TextConnexion}>Connexion </Text>
                      
                </View>

                <View  style={styles.containerInput}>
                        <TextInput
                                placeholder='Entrer votre email'    
                                style={styles.InputStyle}
                        />
                </View>
                <View  style={styles.containerInput}>
                        <TextInput
                                placeholder='Entrer votre mot de passe'     
                                style={styles.InputStyle}
                        />
                </View>
                <View style={styles.ContainerButton}>
                        <TouchableOpacity
                                onPress={()=>navigation.navigate('Home')}
                                style={styles.btnPaiement2}
                                >                                 
                                <Text style={styles.textpaiement2}>Se connecter</Text>            
                        </TouchableOpacity>
                        
                </View>
                        
        </View> 
            
 );
}  
                     

export default LoginScreen;