import * as React from 'react';
import { Button, TextInput,Text, View,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import { useState } from 'react';


const AddDetailsNurse=({ navigation }) => {
    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState(null);
    return (
       <ScrollView >
      <View style={styles.background} style={{marginTop:'25%'}}>
         
      
      <View style={{flexDirection:'row'}}>
         <Text style={{marginLeft:'10%'}}>Name:</Text>
         <Text style={{marginLeft:'60%'}}>Age:</Text>
      </View>
      
      <View style = {styles.createInputField}>  
            <TextInput style = {styles.addInput}
             placeholder = "Date"
             onChangeText={text => setText(text)}
          /> 
               <TextInput style = {styles.addInput}
                placeholder = "Team Members"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Current Medicines</Text> 

<View style={{width:'90%',backgroundColor:'#e5e5e5',alignItems:'center',justifyContent:'center',borderRadius:20,paddingTop:'25%'}}>
<TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Dose"
      onChangeText={text => setText(text)}
   /> 
             <TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Medicine"
      onChangeText={text => setText(text)}
   /> 
                <TextInput style = {{width:'90%',height: 50,borderWidth:1,textAlign:'left',borderRadius:10,borderColor: '#000',backgroundColor:'#fff',padding:'3%',marginTop:'1%',
}}
      placeholder = "Availablity"
      onChangeText={text => setText(text)}
   /> 
   
    <View style={styles.APButtonField} >

     <TouchableOpacity   style={styles.APButton}>
         <Text style={styles.buttonText}>Add</Text>
     </TouchableOpacity>
     </View>
     </View>

     <TextInput style = {styles.addInput}
                placeholder = "Bad Habits"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Primary Condition </Text>
      <TextInput style = {styles.addInput}
                placeholder = "Primary Condition"
                onChangeText={text => setText(addInput)}
             /> 
      <TextInput style = {styles.addInput}
                placeholder = "Hobbie"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Economical Condition </Text>
             <TextInput style = {styles.addInput}
                placeholder = "Rattion Card Color"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Pension"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Insurence Details"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Physical Condition </Text>
             <TextInput style = {styles.addInput}
                placeholder = "Pulse"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "BP"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Temperature"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Economical Condition </Text>
             <TextInput style = {styles.addInput}
                placeholder = "Rattion Card Color"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Pension"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Cleanliness"
                onChangeText={text => setText(addInput)}
             /> 
             <Text style={{fontSize:25}}>Summary </Text>
             <TextInput style = {styles.addInput}
                placeholder = "Major Physical Issues"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Physical Condition"
                onChangeText={text => setText(addInput)}
             /> 
                          <TextInput style = {styles.addInput}
                placeholder = "Awareness of illness"
                onChangeText={text => setText(addInput)}
             /> 
                                       <TextInput style = {styles.addInput}
                placeholder = "Hygience"
                onChangeText={text => setText(addInput)}
             /> 
             


   <View style={styles.APButtonField}>
               <TouchableOpacity   style={styles.APButton}  onPress={()=>{navigation.navigate('MenuScreenNurse') }}>
                  <Text style={styles.buttonText}>Back</Text>
               </TouchableOpacity>
               <TouchableOpacity   style={styles.APButton}  onPress={()=>{navigation.navigate('MenuScreenNurse')}}>
                   <Text style={styles.buttonText}>Add</Text>
               </TouchableOpacity>
               </View>
     </View>
     </View>



     </ScrollView>
  
  
  
   
    );
  }

  export default AddDetailsNurse;