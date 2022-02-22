import * as React from 'react';
import { TextInput,Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreatePatient2=({ navigation }) => {
    const [text, setText] = useState('');
    return (
      <View style={styles.background}>
         <Text>Add Patient</Text>
        <Text>Primary Conditions</Text>
         <TextInput style = {styles.input2}
                placeholder = "Hobbies"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}
            />
           <Text>Economical Conditions</Text>
              <TextInput style = {styles.input2}
                placeholder = "Insurance Details"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.input2}
                placeholder = "Others"
                onChangeText={text => setText(text)}
             /> 
           
             <Text></Text><Text></Text>
             <View style={{flexDirection:"row"}}>
               <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('CreatePatient3')}>
                    <Text style={styles.text2}>Next</Text>
                </TouchableOpacity>
                </View>
                  <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('CreatePatient')}>
                   <Text style={styles.text2}>Back</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    );
  }

  export default CreatePatient2;