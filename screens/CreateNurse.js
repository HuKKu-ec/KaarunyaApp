import * as React from 'react';
import { Button, TextInput,Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreateNurse=({ navigation }) => {
    
    const [nurseName, setNurseName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [ConPassword, setConPassword] =useState('');
    
    return (
        <View style={styles.background}>
        <View style={styles.textContent}>
         <Text style={styles.createHead}>Create a Nurse</Text></View>
        
              <TextInput style = {styles.createInput}
                placeholder = "Nurse Name"
                autoCapitalize = "none"
                onChangeText={nurseName => setNurseName(nurseName)}
            />
                 <TextInput style = {styles.createInput}
                placeholder = "Email"
                onChangeText={Email => setEmail(Email)}
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
                  
                <TouchableOpacity   style={styles.CCButton}  onPress={()=> navigation.navigate('NurseLogin')}>
                   <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity   style={styles.CCButton}  onPress={()=> navigation.navigate('MenuScreenNurse')}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                </View>
               
              </View>
    );
  }

  export default CreateNurse;