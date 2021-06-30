//to get item image as width 100%,25% height,and other items from api...one button to place oerder,navigate to payment

import React, { Component,useEffect,useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const Detail = (props,{navigation,route})=>{

  const {_id,productname,
  description,
  quantity,
  unit,
  rate,
  hotelname,
  hoteladdressplace,
  hotelphonenumber,
  hoteladdresscity
  } = props.route.params.item
  console.log(_id)  


     const fetchData = ()=>{
        fetch("https://foodie-main.herokuapp.com/hotel/orderdetails")
        .then(res=>res.json())
        .then(results=>{
    
             setData(results)
             setLoading(false)
    

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }
    
    

      return (
    
          
          
            
    <View style={styles.card}>
    
    
     <View style={styles.cardImgWrapper}>
     
     
    
       <Image
         source={{uri:'https://storage.googleapis.com/swag-swami-media/2020/12/a9eca2e9-foodie-black.jpg'}}
         resizeMode="cover"
         style={styles.cardImg}
       />
    
     </View>
    
     
     <ScrollView>
    
       <Text style={styles.cardTitle}>{productname}</Text>
       
       
       <Text style={{fontWeight:'bold',padding:10}}>${rate}</Text>
       <Text style={styles.cardDetail1}>
       {quantity} {unit}
       </Text>
       <Text style={styles.cardDetail1}>
       {description}
       </Text>
      
       
       <Text style={styles.cardDetails}>
        Hotel: {hotelname}
       </Text>
       <Text style={styles.cardDetail1}>
       {hotelphonenumber}
       </Text>
       <Text style={styles.cardDetail1}>
       {hoteladdresscity}
       </Text>
       <Text style={styles.cardDetail1}>
       {hoteladdressplace}
       </Text>
       
     
     <TouchableOpacity style={styles.button}  onPress={() =>
            navigation.navigate('Payment')
          } >
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      
    
     </ScrollView>
     </View>
    
     
    
    
      
      
    
    );
    }
           
     


    

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  
   card: {
     
     height: '100%',
    backgroundColor: '#9d9d9f'
   },
  cardImgWrapper: {
    flex: 1,
    
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 3,
    
  },
  cardInfo: {
    
    padding: 10,
    backgroundColor:'white'
    
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding:10
  },
  cardDetail1: {
    marginTop:3,
    fontSize: 12,
    color: '#444',
    fontWeight:'bold',
    fontStyle:'italic',
    padding:10
  },
  cardDetails:{
    fontWeight:'bold',
    fontSize:16,
    padding:10
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6f836b',
    textAlign: 'center',
    
  
},
button: {
  width: '100%',
  height:50,
  backgroundColor:'#21680c',
  borderRadius: 5,
  marginVertical: 12,
  paddingVertical: 12,
  
},
  

});
  