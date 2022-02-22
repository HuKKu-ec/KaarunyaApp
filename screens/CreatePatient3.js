import * as React from 'react';
import { TextInput,Text, View,TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreatePatient3=({ navigation }) => {
    const [text, setText] = useState('');
    return (
      <View style={styles.background}>
         <Text style={styles.mainh2}>Add Patient</Text>
         <Text></Text>
         <View style={{ backgroundColor: "#2c6b82"}}>
         <Text style={styles.mainh2}>Family Details</Text>
         <TextInput style = {styles.input2}
                placeholder = "Name"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}
            />
                 <TextInput style = {styles.input2}
                placeholder = "Age"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.input2}
                placeholder = "Relation"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.input2}
                placeholder = "Education"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.input2}
                placeholder = "Mode Of Income"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.input2}
                placeholder = "Marital Status"
                onChangeText={text => setText(text)}
             /> 
             <View style={{alignItems:'center'}}>
             <Text>Gender</Text>
             <TouchableOpacity   style={styles.button3}>
                    <Text style={styles.text2}>ADD</Text>
                </TouchableOpacity>
                </View>
                </View>
                <Text></Text><Text></Text>
             <View style={{flexDirection:"row"}}>
               <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('CreatePatient4')}>
                    <Text style={styles.text2}>Next</Text>
                </TouchableOpacity>
                </View>
                  <View style={styles.container2}>
                <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('CreatePatient2')}>
                   <Text style={styles.text2}>Back</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    );
  }

  export default CreatePatient3;