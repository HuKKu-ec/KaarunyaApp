import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler'
import ProfileScreen from './ProfileScreen';
import { useState } from "react";
import {TouchableOpacity,Text, View,TextInput,ScrollView } from 'react-native';
import styles from './styles';
import { Button,Card} from 'react-native-elements'
import CreatePatient from './CreatePatient';

const MenuScreenNurse=({ navigation })=> {
  const Patients=[{'name':'hukbath','age':18},{'name':'poli','age':17},{'name':'polib','age':21},{'name':'polib','age':21},{'name':'polib','age':21},{'name':'polib','age':21}];
  const [Saerch,setSearch]=useState('');
  return (
  <>
    <View style={styles.background}>
       <TextInput style = {styles.inputSearch}
              placeholder = "Search"
              autoCapitalize = "none"
              onChangeText={Search => {setSearch(Search)}}
              defaultValue={Saerch}
          />
          <ScrollView>
          
<View  style={styles.cardView}>
          {
Patients.map((value,i)=>{
              return(

<Card key={i} Style={styles.cardModel}>
<View style={{margin:20,width:'100%',flexDirection:'row'}}>
  <Text >Name:{value.name}</Text>
  <Text style={{marginLeft:'25%'}}>Age:{value.age}</Text>
  
  </View>
  <View style={{margin:20,width:'100%',flexDirection:'row'}}>
  
  <Button    
  buttonStyle={{marginRight: '25%',}}          
   title='show'
   onPress={()=>navigation.navigate('NursePager')}
   />
    
  <Button 
  buttonStyle={{
    marginLeft: '25%',
  }}
  title='add details'
  onPress={()=>{navigation.navigate('AddDetailsNurse')}}/>
  
  </View>
</Card>
)})
}
          </View>
<View style={styles.cardView}>
<Card Style={styles.cardModel}>
  <Text>Name:value.name</Text>
  <Text>Age:value.age</Text>
  <View style={{margin:20,width:'100%',flexDirection:'row'}}>
  
  <Button    
                buttonStyle={{
                
                  marginRight: '25%',
                  
                }}          
   title='show'/>
  <Button 
  buttonStyle={{
    marginLeft: '25%',
  }}
  title='add details'/>
  </View>
</Card></View>
</ScrollView>
       {/* <TouchableOpacity   style={styles.buttonback}  onPress={()=> navigation.navigate('Profile')}>
          <Text style={styles.text3}>{'<'}</Text>
        </TouchableOpacity> */}
        
    </View>
    </>
  );
}
const NurseDrawer = () => {
    const Drawer = createDrawerNavigator();
    return ( 
        
       
        <Drawer.Navigator initialRouteName="MenuScreenNurse">
        <Drawer.Screen name="Nurse" component={MenuScreenNurse}/>
        <Drawer.Screen name="Create Patient" component={CreatePatient}/>
        
        <Drawer.Screen name="Log Out" component={ProfileScreen} options={{headerShown:false }}/>   
        </Drawer.Navigator>
        

  
     );
}
 
export default NurseDrawer;

