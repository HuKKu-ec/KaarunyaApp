import * as React from 'react';
import { Button, TextInput,Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreateCenter=({ navigation }) => {
    const [centerId, setCenterId] = useState('');
    const [centerName, setCenterName] = useState('');
    const [place, setPlace] =useState('');
    const [pincode, setPincode] =useState('');
    const [password, setPassword] =useState('');
    const [ConPassword, setConPassword] =useState('');
    
    return (
      <View style={styles.background}>
        <View style={styles.textContent}>
         <Text style={styles.createHead}>Create a Center</Text></View>
        
              <TextInput style = {styles.createInput}
                placeholder = "Center ID"
                autoCapitalize = "none"
                onChangeText={centerId => setCenterId(centerId)}
            />
              <TextInput style = {styles.createInput}
                placeholder = "Name of the center"
                onChangeText={centerName => setCenterName(centerName)}
             /> 
                 <TextInput style = {styles.createInput}
                placeholder = "Place"
                onChangeText={place => setPlace(place)}
             /> 
                 <TextInput style = {styles.createInput}
                placeholder = "PinCode"
                onChangeText={pincode => setPincode(pincode)}
             /> 
                 <TextInput style = {styles.createInput}
                placeholder = "Enter Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
             /> 
                 <TextInput style = {styles.createInput}
                placeholder = "Confirm Password"
                secureTextEntry={true}
                onChangeText={ConPassword => setConPassword(ConPassword)}
             /> 
             
            
             <View style={styles.buttonField}>
                  
                <TouchableOpacity   style={styles.CCButton}  onPress={()=> navigation.navigate('LoginPageMain')}>
                   <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity   style={styles.CCButton}  onPress={()=> navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                </View>
               
              </View>
    );
  }

  export default CreateCenter;