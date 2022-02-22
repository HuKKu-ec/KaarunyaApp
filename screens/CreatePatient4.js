import * as React from 'react';
import { TextInput,Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreatePatient4=({ navigation }) => {
    const [text, setText] = useState('');
    return (
      <View style={styles.background}>
         <Text style={styles.mainh2}>Add Patient</Text>
         <TextInput style = {styles.input2}
                placeholder = "Nurse Note"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}/>
             <Text></Text><Text></Text>
             <View style={{flexDirection:"row"}}>
               <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('MenuScreenNurse')}>
                    <Text style={styles.text2}>Submit</Text>
                </TouchableOpacity>
                </View>
                  <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('CreatePatient3')}>
                   <Text style={styles.text2}>Back</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    );
  }

  export default CreatePatient4;