import * as React from 'react';
import { Button, TextInput,Text, View,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import { useState } from 'react';


const AddDetailsVol=({ navigation }) => {
    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState(null);
    return (
       <ScrollView  >
      <View style={styles.background} >
      <View style={{marginTop:'25%',flexDirection:'row'}} >
         <Text style={{marginRight:'55%'}}>Name:</Text>
         <Text>Age:</Text>
      </View>

          <Text style={{fontSize:25}}>Comments</Text>
          <TextInput style = {styles.addInput}
             placeholder = "Ecconomical"
             onChangeText={text => setText(text)}
          /> 
          <TextInput style = {styles.addInput}
             placeholder = "Educational"
             onChangeText={text => setText(text)}
          /> 
                    <TextInput style = {styles.addInput}
             placeholder = "Mental Condition"
             onChangeText={text => setText(text)}
          /> 

            <View style={styles.APButtonField}>
               <TouchableOpacity   style={styles.APButton}  onPress={()=>{navigation.navigate('MenuScreenDoctor') }}>
                  <Text style={styles.buttonText}>Back</Text>
               </TouchableOpacity>
               <TouchableOpacity   style={styles.APButton}  onPress={()=>{navigation.navigate('MenuScreenDoctor')}}>
                   <Text style={styles.buttonText}>Add</Text>
               </TouchableOpacity>
               </View>
          </View>
     </ScrollView>
    );
  }

  export default AddDetailsVol;