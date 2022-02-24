import React, { useState } from 'react';
import { StyleSheet, View, Text,ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


const NursePager = () => {
  const [docList,setDocList]=useState([{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},]);
  const [nurList,setNurList]=useState([{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},])
  const [volList,setVolcList]=useState([{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},{date:'12-02-2022',content:'hello my dear flllow hatrer depolid sorem hukfa kijar'},])
    
  
  return (
    <View style={{ flex: 1 }}>
    
      <PagerView style={styles.viewPager} initialPage={1}>
  <ScrollView>  
        <View style={styles.page} key="1">
        <Text style={{marginTop:'15%',alignItems:'center',color: '#2c6b82',fontWeight: 'bold',fontSize: 40,marginBottom:'8%'}}>Doctor</Text>
        {/* start */}
        {docList.map((value,k)=>{return(
          <View key={k} style={{marginTop:5,width:'90%'}}>
      <Collapse>
    <CollapseHeader>
      <View style={{backgroundColor:'#2c6b82',padding:10}}>
        <Text style={{color:'#fff'}}>{value.date}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>{value.content}</Text>
    </CollapseBody>
</Collapse>
</View>
        )})}
        </View></ScrollView>
        <ScrollView>
        <View  style={styles.page} key="2">
        <Text style={{marginTop:'15%',alignItems:'center',color: '#2c6b82',fontWeight: 'bold',fontSize: 40,marginBottom:'8%'}}>Nurse</Text>
        {/* start */}
      
        {nurList.map((value,k)=>{return(
          <View key={k} style={{marginTop:5,width:'90%'}}>
      <Collapse>
    <CollapseHeader>
      <View style={{backgroundColor:'#2c6b82',padding:10}}>
        <Text style={{color:'#fff'}}>{value.date}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>{value.content}</Text>
    </CollapseBody>
</Collapse>
</View>
        )})}
 {/* end */}
</View></ScrollView><ScrollView>
        <View style={styles.page} key="3">
        <Text style={{marginTop:'15%',alignItems:'center',color: '#2c6b82',fontWeight: 'bold',fontSize: 40,marginBottom:'8%'}}>Volunteer</Text>
        {/* start */}
        {volList.map((value,k)=>{return(
          <View key={k} style={{marginTop:5,width:'90%'}}>
      <Collapse>
    <CollapseHeader>
      <View style={{backgroundColor:'#2c6b82',padding:10}}>
        <Text style={{color:'#fff'}}>{value.date}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text style={{backgroundColor:'#e5e5e5',padding:10}}>{value.content}</Text>
    </CollapseBody>
</Collapse>
</View>
        )})}
        </View></ScrollView>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    
    alignItems: 'center',
  },
});

export default NursePager;