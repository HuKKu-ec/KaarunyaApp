import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler'
import ProfileScreen from './ProfileScreen';
import { useState ,useEffect} from "react";
import {TouchableOpacity,Text, View,TextInput,ScrollView } from 'react-native';
import styles from './styles';
import { Button,Card} from 'react-native-elements'
import LoginScreenMain from './LoginScreenMain';
import { db,auth } from '../firebase/config';
import { collection, doc ,getDocs ,query} from 'firebase/firestore';

import {useAuth} from './LoginScreenMain'
import {signOut } from "firebase/auth";

const MenuScreenDoctor=({ navigation })=> {
  const [Patient,setPatient]=useState([])
const currentUser=useAuth();
const patientData=async()=>{
  const q=query(collection(db,'CreatePatient'));
  querySnapshot=await getDocs(q)
  const data=querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id:doc.id
  }));
  setPatient(data)

  

}
useEffect(()=>{
  
patientData()
 
},[Patient])
  
  return (
  <>
    <View style={styles.background}>
       {/* <TextInput style = {styles.inputSearch}
              placeholder = "Search"
              autoCapitalize = "none"
              onChangeText={Search => {setSearch(Search)}}
              defaultValue={Saerch}
          /> */}
          <ScrollView>
           
          
<View  style={styles.cardView}>
          {
Patient.map((value,i)=>{
  if(value.currentUser==`${currentUser.uid}`)   return(

<Card  key={i} Style={styles.cardModel}>
<View style={{margin:20,width:'100%',flexDirection:'row'}}>
  <Text >Name:{value.name}</Text>
  <Text style={{marginLeft:'25%'}}>Age:{value.age}</Text>
  </View>
  <View style={{margin:20,width:'100%',flexDirection:'row'}}>
  <Button    
  buttonStyle={{marginRight: '25%',}}          
   title='show'
   onPress={()=>navigation.navigate('DoctorPager',{value})}
   />
  
  <Button 
  buttonStyle={{
    marginLeft: '25%',
  }}
  onPress={()=>{navigation.navigate('AddDetailsDoctor',{value})}}
  title='add details'/>
  </View>
</Card>
)})
}
          </View>

</ScrollView>
       {/* <TouchableOpacity   style={styles.buttonback}  onPress={()=> navigation.navigate('Profile')}>
          <Text style={styles.text3}>{'<'}</Text>
        </TouchableOpacity> */}
        
    </View>
    </>
  );
}
const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return ( 
        
       
        <Drawer.Navigator initialRouteName="MenuScreenDoctor">
        <Drawer.Screen name="Doctor" component={MenuScreenDoctor}/>
        <Drawer.Screen name="Log Out" component={LoginScreenMain} onPress={()=>{
          signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        }} options={{headerShown:false}}/>   
        </Drawer.Navigator>
        

  
     );
}
 
export default Drawer;

