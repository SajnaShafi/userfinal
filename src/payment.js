import React, { useState } from "react";
import {  Text, StyleSheet, View } from "react-native";
import { Checkbox,Button,Card} from "react-native-paper"
const PaymentMethod = (navigation) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>How'd you like to pay?</Text>
      <View>
      <Card  style={styles.button}>
        <Text style={styles.label}>Cash on delivery</Text>
        <Text style={styles.label2}>COD</Text>
        </Card>
      </View>
      <View >
      <Card style={styles.button}>
        <Text style={styles.label}>Online payment</Text>
        <Text style={styles.label3}>UPI/Cards/Netbanking/Paytm</Text>
        </Card>
      </View>
        
      </View>
     

    
    
  );
};
const themes ={
    colors:{
        primary:'grey'
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'black'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    color:'limegreen',
    backgroundColor:'black'
  },
  text:{
    fontSize:20,
    color:'darkgrey',
    top:40,
    left:10
  },
  button: {
   top:50,
   right:90,
   backgroundColor:'#21680c',
   width:360,
   height:130,
   margin:5,
   left:5
   
  },
  label: {
    margin: 5,
    color:'darkgrey',
    top:10,
    left:25,
    fontSize:24,
    fontWeight:'700'
  },
  label2: {
    margin: 5,
    color:'darkgrey',
    top:10,
    left:25,
    fontSize:20,
    fontWeight:'700'
  },
  label3: {
    margin: 5,
    color:'darkgrey',
    top:28,
    left:25,
    fontSize:18,
    fontWeight:'700'
  },
});

export default PaymentMethod;