import * as React from 'react';
import { useState } from "react";
import { Button,TouchableOpacity,Text, View } from 'react-native';
import styles from './styles';

const ProfileScreen=({ navigation })=> {
  return (
    <View style={styles.background}>
      
      
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('DoctorLogin')}>
          <Text style={styles.textProf}>Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('NurseLogin')}>
          <Text style={styles.textProf}>Nurse</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.buttonStyle}  onPress={()=> navigation.navigate('VolLogin')}>
          <Text style={styles.textProf}>Volunteer</Text>
        </TouchableOpacity>
       <TouchableOpacity   style={styles.buttonback}  onPress={()=> navigation.navigate('LoginPageMain')}>
          <Text style={styles.text3}>{'<'}</Text>
        </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;