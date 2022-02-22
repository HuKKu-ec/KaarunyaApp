import React, { Component } from 'react'
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

const VolLogin =({ navigation }) => {
   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
     return (
        <View style = {styles.background}>
           <View style={styles.contentHeads}>
            
             <Text style={styles. mainHead}>Volunteer</Text>
             </View> 
            

             <TextInput style = {styles.input}
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText={Email => setEmail(Email)}
               defaultValue={Email}
           />
             <TextInput style = {styles.input}
               placeholder = "Password"
               autoCapitalize = "none"
               onChangeText={Password => setPassword(Password)}
               defaultValue={Password}
            />   
            
            <View style={styles.createCenter}>
             <TouchableOpacity   style={styles.button2}  onPress={()=> navigation.navigate('CreateVol')}>
                <Text style={styles.CCtext}>New Volunteer</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.buttonHead}>
            <TouchableOpacity   style={styles.buttonback}  onPress={()=> navigation.navigate('Profile')}>
         <Text style={styles.text3}>{'<'}</Text>
       </TouchableOpacity>
       </View>
        </View>
      )
   }

export default VolLogin;