import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import { styles } from './style';
import { colors } from '../../styles';


function HomeScreen({navigation}) {
    return ( 
                <View style={styles.container}>  
                       <TouchableOpacity 
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
                        </TouchableOpacity>            
                </View>    
        );
}

export default HomeScreen;