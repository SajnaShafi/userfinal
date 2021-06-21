import React, { PropTypes, Component, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView, TextInput} from 'react-native'
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'
import { color, min } from 'react-native-reanimated';
import { Button } from 'react-native';
import Homescreen from './homescreen';
import { State } from 'react-native-gesture-handler';

function Myorder() {
 
     
     
        const [Name,setfullName] = useState("")
        const [Contactnumber,setContactNumber] = useState("")
        const [Addressline1,setStreet] = useState("")
        const [Addressline2,setLandmark] = useState("")
        const [Pincode,setPincode] = useState("")
        const [City,setCity] = useState("")
        const [State,setState] = useState("")
       const submitData = ()=>{
        
        fetch("http://192.168.42.244:5000/userapppost",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              
                
                Name,
                Contactnumber,
                Addressline1,
                Addressline2,
                Pincode,
                City,
                State
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`Ordered successfuly....                        Get back soon`)
            navigation.navigate('Home')
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
          
      })
     }
   
    
    
   
  
  return (
    <View style={styles.container}>
    
          
                
                      <ScrollView>
      
                     <TextInput style={styles.inputBox}
                      onChangeText={text => setfullName(text)}
                      underlineColorAndroid = "#21680c"
                      placeholder="FullName" 
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setContactNumber(text)} 
                      underlineColorAndroid = "#21680c"
                      placeholder="ContactNumber"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setStreet(text)} 
                      underlineColorAndroid = "#21680c"
                      placeholder="Street"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setLandmark(text)}
                      underlineColorAndroid = "#21680c"
                      placeholder="Landmark"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setPincode(text)}
                      underlineColorAndroid = "#21680c"
                      placeholder="Pincode"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setCity(text)}
                      underlineColorAndroid = "#21680c"
                      placeholder="City"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                      <TextInput style={styles.inputBox}
                      onChangeText={text => setState(text)}
                      underlineColorAndroid = "#21680c"
                      placeholder="State"
                      placeholderTextColor = "#9d9d9f"
                      selectionColor="#fff"
                      keyboardType="email-address"/>
                     <TouchableOpacity style={styles.button} onPress={() =>
                      submitData()}>
                      <Text style={styles.buttonText}>Order Now</Text>
                     </TouchableOpacity>                      
                     </ScrollView>
       

            
      
       </View>
       
   
        
          )}
      
     
   
             
             
            


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121318'
  },

  header:{
  width:'100%',
  alignItems:'center',
  height:'10%',
  flexDirection:'row',
  paddingLeft:10
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: "#9d9d9f",
    textAlign: 'center'
    },
  buttonText1: {
  fontSize: 24,
  fontWeight: '500',
  color: "#9d9d9f",
  textAlign: 'center'
  },
  button: {
    width: Dimensions.get('window').width,
    height:50,
    backgroundColor:'#21680c',
    borderRadius: 8,
    marginVertical: 15,
    paddingVertical: 12,
    padding:100,        
    },
  Newuser: {
  fontSize: 20,
  marginTop:-40,
  marginLeft:20,
  fontWeight: '500',
  color: '#ffffff',
  paddingVertical:10,
  paddingHorizontal:35
  },
  icon:{
  marginTop:3,
  marginLeft:10,
  marginBottom:3
  },
  inputBox: {
  width: Dimensions.get('window').width,
  backgroundColor: '#000', 
  paddingHorizontal:25,
  fontSize: 16,
  color: '#fff',
  marginVertical: 10,
  marginTop:14,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold'
  },
  inputBox1: {
    width: 150,
    backgroundColor: '#000', 
    paddingHorizontal:25,
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
    marginTop:14,
    justifyContent: 'center',
    alignItems: 'center',
    },
    inputBox2: {
      backgroundColor: '#000', 
      paddingHorizontal:5,
      fontSize: 16,
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28,
    color:'limegreen'
  },
  order: {
    flexDirection:'column',
    justifyContent:'center'
    
  },
  button1: {
    width: 30,
    height:40,
    backgroundColor:'#21680c',
    borderRadius: 10      
    }
})

export default Myorder

