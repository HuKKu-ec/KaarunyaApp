import React, { useEffect } from 'react'
import { useState } from 'react';
import { View,Button, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import styles from './styles'
import Logo from '../assets/logo.png'
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase/config'

const LoginScreenMain =({ navigation }) => {
  const Center=[{cid:'A11',password:'123'},{cid:'A12',password:'1234'}];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('ProfileScreen')
    alert(user.uid)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  }
    
      
  
      return (
        
        
        
         <View style = {styles.background}>
            <View style = {styles.contentHeads}>
              <Image source={Logo} />
              </View>
              
              <TextInput style = {styles.input}
              
                placeholder = "Email"
                autoCapitalize = "none"
                onChangeText={text => {setEmail(text)}}
                value={email}
            />
              <TextInput style = {styles.input}
                placeholder = "Password"
                autoCapitalize = "none"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
             />  
                             <TouchableOpacity  onPress={handleLogin} style={{borderStyle:'solid',borderColor:'#000',padding:'3%',paddingLeft:'8%',paddingRight:'8%',borderRadius:50,borderStyle:'solid',borderColor:'#000',borderWidth:1,marginTop:20}}>
                   <Text style={{color:'#000'}}>LogIn</Text>
                </TouchableOpacity>

  <View style={styles.createCenter}>
    <TouchableOpacity   style={styles.button2}  onPress={()=> navigation.navigate('CreateCenter')}>
        <Text style={styles.CCtext}>Create A Center</Text>
        </TouchableOpacity>
        </View>    
        </View>
      )
   }

export default LoginScreenMain;
export const useAuth=()=>{
  const [currentUser,setCurrentUser]=useState('');
  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,user=>setCurrentUser(user))
    return unsub;
  },[])
  return currentUser;
}