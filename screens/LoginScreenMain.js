import React, { useEffect } from 'react'
import { useState } from 'react';
import { View,Button, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import styles from './styles'
import Logo from '../assets/logo.png'
const LoginScreenMain =({ navigation }) => {
  const Center=[{cid:'A11',password:'123'},{cid:'A12',password:'1234'}];
  const [centerId, setCenterId] = useState('');
  const [password, setPassword] = useState('');
    useEffect(() => {
      for(let i=0;i<Center.length;i++){
        if(`${Center[`${i}`].cid}`===centerId && `${Center[`${i}`].password}`===password){
          navigation.navigate('Profile');
          
        }
      
        }
        
      
      
    },[centerId,password]);
      return (
        
        
        
         <View style = {styles.background}>
            <View style = {styles.contentHeads}>
              <Image source={Logo} />
              </View>
              
              <TextInput style = {styles.input}
              
                placeholder = "Center ID"
                autoCapitalize = "none"
                onChangeText={centerId => {setCenterId(centerId)}}
                defaultValue={centerId}
            />
              <TextInput style = {styles.input}
                placeholder = "Password"
                autoCapitalize = "none"
                onChangeText={password => setPassword(password)}
                defaultValue={password}
                secureTextEntry={true}
             />  

  <View style={styles.createCenter}>
    <TouchableOpacity   style={styles.button2}  onPress={()=> navigation.navigate('CreateCenter')}>
        <Text style={styles.CCtext}>Create A Center</Text>
        </TouchableOpacity>
        </View>    
        </View>
      )
   }

export default LoginScreenMain;