import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native'

import Debit from "./debit";
import Credit from "./credit";
class Onlinepay extends Component {
         render() {
             return (
              <View style={{backgroundColor:'black',height:'100%',width:'100%'}}>
                
                
                <Debit/> 
                <Credit/>
                <Pressable
          style={[styles.buttonOpen]}
          onPress={() =>
            navigation.navigate('My Orders')
          }  
        >
          <Text style={styles.textStyle}>Proceed</Text>
        </Pressable>
              </View>
             );
            }
        }
 export default Onlinepay;

 const styles = StyleSheet.create({
    buttonOpen: {
        backgroundColor: 'limegreen',
        height:50,
        borderRadius:10
      },
      textStyle: {
        marginStart:150,
       fontWeight: "bold",
       marginTop:15
    },  
 

})