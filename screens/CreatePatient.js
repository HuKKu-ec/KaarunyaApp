import * as React from 'react';
import { TextInput,Text, View,TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const CreatePatient=({ navigation }) => {
    const [text, setText] = useState('');
    const [number, onChangeNumber] = React.useState(null);
    const [checked, setChecked] = React.useState('first');
    return (<ScrollView>
      <View style={styles.background}>
         
      
         <Text style={styles.createHead}>Add Patient</Text>
         
         <View style = {styles.createInputField}>  
         <TextInput style = {styles.addInput}
                placeholder = "Name of the Patient"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}
            />
              <TextInput style = {styles.addInput}
                placeholder = "Patient ID"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Age"
                onChangeText={text => setText(text)}
             /> 
            {/* <Text>Upload Photo</Text> */}
                 <TextInput style = {styles.addInput}
                placeholder = "Phone"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Address"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Panchayath"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Ward No"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Guradian's Name"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Guardian's Phone Number"
                onChangeText={text => setText(text)}
             />
        <Text style={{fontSize:25}}>Primary Conditions</Text>
         <TextInput style = {styles.addInput}
                placeholder = "Hobbies"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}
            />
           <Text style={{fontSize:25}}>Economical Conditions</Text>
              <TextInput style = {styles.addInput}
                placeholder = "Insurance Details"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Others"
                onChangeText={text => setText(text)}
             /> 
             <Text style={{fontSize:25}}>Add Nurse Note</Text>
         <TextInput style = {styles.addInput}
                placeholder = "Nurse Note"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}/>
             {/* <Text style={{fontSize:25}}>Family Details</Text>
             <View >
             <View style={{ width:"90%",alignItems:"center", backgroundColor: "#2c6b82",paddingTop:'10%',marginTop:'6%'}}>
         <TextInput style = {styles.FamAddInput}
                placeholder = "Name"
                autoCapitalize = "none"
                onChangeText={text => setText(text)}
            />
                 <TextInput style = {styles.FamAddInput}
                placeholder = "Age"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.FamAddInput}
                placeholder = "Relation"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.FamAddInput}
                placeholder = "Education"
                onChangeText={text => setText(text)}
             /> 
                 <TextInput style = {styles.FamAddInput}
                placeholder = "Mode Of Income"
                onChangeText={text => setText(text)}
             /> 
                <TextInput style = {styles.FamAddInput}
                placeholder = "Marital Status"
                onChangeText={text => setText(text)}
             /> 
            <View style={styles.APButtonField}>
                  <TouchableOpacity   style={styles.APButton}  onPress={()=> navigation.navigate('MenuScreenNurse')}>
                     <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity   style={styles.APButton}  onPress={()=> navigation.navigate('CreatePatient2')}>
                      <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                  </View>
             </View>
             </View> */}
               <View style={styles.APButtonField}>
                  <TouchableOpacity   style={styles.APButton}  onPress={()=>{ }}>
                     <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity   style={styles.APButton}  onPress={()=>{}}>
                      <Text style={styles.buttonText}>Create</Text>
                  </TouchableOpacity>
                  </View>
             </View>
        </View>
        </ScrollView>
    );
  }

  export default CreatePatient;