import * as React from 'react';
import { Button, TextInput,Text, View,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import { useState } from 'react';


const AddDetailsDoctor=({ navigation }) => {
    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState(null);
    return (
       <ScrollView >
      <View style={styles.background}>
         
      
      <View style={{marginTop:'25%',flexDirection:'row'}}>
         <Text style={{marginRight:'55%'}}>Name:</Text>
         <Text>Age:</Text>
      </View>
      
      <View style = {styles.createInputField}>  

              <TextInput style = {styles.addInput}
             placeholder = "Date"
             onChangeText={text => setText(text)}
          /> 
         {/* <Text>Upload Photo</Text> */}
              <TextInput style = {styles.addInput}
             placeholder = "Doctor name"
             onChangeText={text => setText(text)}
          /> 
             <TextInput style = {styles.addInput}
             placeholder = "Other Team Members"
             onChangeText={text => setText(text)}
          /> 
              <TextInput style = {styles.addInput}
             placeholder = "Major events since last visit & Present complaints"
             onChangeText={text => setText(text)}
          /> 
          <View style={{width:'90%',backgroundColor:'#e5e5e5',alignItems:'center',justifyContent:'center',borderRadius:20,height:'20%'}}>

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
             <View></View>
              <View style={styles.APButtonField} >

               <TouchableOpacity   style={styles.APButton}>
                   <Text style={styles.buttonText}>Add</Text>
               </TouchableOpacity>
               </View>
               
             
          </View>

          
             
          <Text style={{fontSize:25}}>Primary Needs</Text>
          <TextInput style = {styles.addInput}
             placeholder = "Food and fluids"
             onChangeText={text => setText(text)}
          /> 
                    <TextInput style = {styles.addInput}
             placeholder = "Blader and Bowel"
             onChangeText={text => setText(text)}
          /> 
                    <TextInput style = {styles.addInput}
             placeholder = "Sleep"
             onChangeText={text => setText(text)}
          /> 
                    <TextInput style = {styles.addInput}
             placeholder = "Bath and Cleaning"
             onChangeText={text => setText(text)}
          /> 
          <TextInput style = {styles.addInput}
                placeholder = "Exercise"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Leisure Activities"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Perseption about Present State"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Cleanliness of Surroundings"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Pulse"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "BP"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Temperature"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Medical Examination"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Discussion and Management"
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
     </View>
     
     </ScrollView>
  
  
  
      //  <ScrollView>
      // <View style={styles.background}>
      //    <Text>Name</Text>
      //    <Text>Age</Text>
      //    <TextInput style = {styles.addInput}
      //           placeholder = "Date"
      //           autoCapitalize = "none"
      //           onChangeText={text => setText(text)}
      //       />
      //         <TextInput style = {styles.addInput}
      //           placeholder = "Doctor's Name"
      //           onChangeText={text => setText(text)}
      //        /> 
      //            <TextInput style = {styles.addInput}
      //           placeholder = "Other Team Members"
      //           onChangeText={text => setText(text)}
      //        /> 
      //            <TextInput style = {styles.addInput}
      //           placeholder = "Major events since last visit & Present complaints"
      //           value={number}
      //           onChangeText={onChangeNumber}
      //        /> 
      //        <Text style={{color:'#504C4C',fontSize:40}}>Current Medicines</Text>
      //            <TextInput style = {styles.addInput}
      //           placeholder = "Medicines"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Dose"
      //           onChangeText={text => setText(text)}
      //        /> 
      //        <Text>Primary Needs</Text>
      //            <TextInput style = {styles.addInput}
      //           placeholder = "Food and Fluids"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Bladder and Bowel"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Sleep"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Bath and Cleaning"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Exercise"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Leisure Activities"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Perseption about Present State"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Cleanliness of Surroundings"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Pulse"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "BP"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Temperature"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Medical Examination"
      //           onChangeText={text => setText(text)}
      //        /> 
      //           <TextInput style = {styles.addInput}
      //           placeholder = "Discussion and Management"
      //           onChangeText={text => setText(text)}
      //        /> 
             
      //        <View style={{flexDirection:"row"}}>
      //          <View style={styles.container2}>
      //           <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('MenuScreenDoctor')}>
      //               <Text style={styles.text2}>Submit</Text>
      //           </TouchableOpacity>
      //           </View>
      //             <View style={styles.container2}>
      //           <TouchableOpacity   style={styles.button3}  onPress={()=> navigation.navigate('MenuScreenDoctor')}>
      //              <Text style={styles.text2}>Back</Text>
      //           </TouchableOpacity>
      //           </View>
      //           </View>
      //   </View>
      //   </ScrollView>
    );
  }

  export default AddDetailsDoctor;