import * as React from 'react';
import { TextInput,Text, View,TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { doc ,setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import {useAuth} from './LoginScreenMain'
const CreatePatient=({ navigation }) => {
    const [name, setName] = useState('');
    const [pid, setPid] = useState('');
    const [age,setAge]=useState('');
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [panchayath,setPanchayath]=useState('')
    const [ward,setWard]=useState('')
    const [gname,setGname]=useState('')
    const [gphone,setGphone]=useState('')
    const [hobbies,setHobbies]=useState('')
    const [inshurance,setInshurance]=useState('')
    const [other,setOther]=useState('')
    const [nurseNote,setNurseNote]=useState('')
    const currentUser=useAuth();
    const PatientCreate=()=>{

      const myDoc=doc(db,"CreatePatient",`${pid}`)
      const docData={
         currentUser:`${currentUser.uid}`,
         name,
         pid,
         age,
         phone,
         address,
         panchayath,
         ward,
         gname,
         gphone,
         hobbies,
         inshurance,
         other,
         nurseNote
      }
      setDoc(myDoc,docData).then(()=>{
         alert(`Patient named ${name} is created!`)
         navigation.goBack()
   }).catch((error)=>{alert(`${error.massege}`)})
    }
    return (<ScrollView>
      <View style={styles.background}>
         
      
         {/* <Text style={styles.createHead}>Create Patient</Text> */}
         
         <View style = {styles.createInputField}>  
         <TextInput style = {styles.addInput}
                placeholder = "Name of the Patient"
                autoCapitalize = "none"
                value={name}
                onChangeText={text => setName(text)}
            />
              <TextInput style = {styles.addInput}
                placeholder = "Patient ID"
                value={pid}
                onChangeText={text => setPid(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Age"
                vlaue={age}
                onChangeText={text => setAge(text)}
             /> 
            {/* <Text>Upload Photo</Text> */}
                 <TextInput style = {styles.addInput}
                placeholder = "Phone"
                vlaue={phone}
                onChangeText={text => setPhone(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Address"
                value={address}
                onChangeText={text => setAddress(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Panchayath"
                value={panchayath}
                onChangeText={text => setPanchayath(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Ward No"
                value={ward}
                onChangeText={text => setWard(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Guradian's Name"
                vlaue={gname}
                onChangeText={text => setGname(text)}
             /> 
                <TextInput style = {styles.addInput}
                placeholder = "Guardian's Phone Number"
                value={gphone}
                onChangeText={text => setGphone(text)}
             />
        <Text style={{fontSize:25}}>Primary Conditions</Text>
         <TextInput style = {styles.addInput}
                placeholder = "Hobbies"
                autoCapitalize = "none"
                value={hobbies}
                onChangeText={text => setHobbies(text)}
            />
           <Text style={{fontSize:25}}>Economical Conditions</Text>
              <TextInput style = {styles.addInput}
                placeholder = "Insurance Details"
                value={inshurance}
                onChangeText={text => setInshurance(text)}
             /> 
                 <TextInput style = {styles.addInput}
                placeholder = "Others"
                value={other}
                onChangeText={text => setOther(text)}
             /> 
             <Text style={{fontSize:25}}>Add Nurse Note</Text>
         <TextInput style = {styles.addInput}
                placeholder = "Nurse Note"
                autoCapitalize = "none"
                vlaue={nurseNote}
                onChangeText={text => setNurseNote(text)}/>
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
                  <TouchableOpacity   style={styles.APButton}  onPress={()=>{ navigation.goBack()}}>
                     <Text style={styles.buttonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity   style={styles.APButton}  onPress={PatientCreate}>
                      <Text style={styles.buttonText}>Create</Text>
                  </TouchableOpacity>
                  </View>
             </View>
        </View>
        </ScrollView>
    );
  }

  export default CreatePatient;