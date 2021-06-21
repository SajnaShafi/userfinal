import React,{ Component, useEffect } from 'react';
import{View,Image,StyleSheet} from "react-native";


 const Splashscreen = ({navigation}) =>{
   useEffect (() =>{
      setTimeout (()=>{
            navigation.navigate('Login');
      }, 3000)
   },[])
      return(
      <View style={styles.container}>
        <Image  source={require('./Images/Fd.jpg')}
          resizeMode='contain' style={{ width: 200, height: 1000 }}
        ></Image>
      </View>
    
      )
    
}
const styles=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'black'
    }
  });
  export default Splashscreen;