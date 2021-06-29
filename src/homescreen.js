import React,{useEffect,useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import {useTheme} from '@react-navigation/native';
import Restaurant from '../src/restaurant';

import Swiper from 'react-native-swiper';

 const HomeScreen = ({navigation}) => {
   const theme = useTheme();


  return (
    <ScrollView style={styles.container}>


    <View style={styles.header}> 
          <Icon name='navicon' size={26} color='white'onPress={() =>
                          navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        } style={{paddingLeft:7}}/> 
            
        {/* <Icons name='location-pin' size={18} color='#37af0c'onPress={() =>
                      navigation.navigate('Location')
                    }  style={{paddingLeft:12}}/> 
         <Text onPress={() =>
                      navigation.navigate('Location')
                    }  style={styles.place}>Kerala</Text> */}
                    </View>

                    <View style={styles.body}>
        <Text style={styles.texth}> WHAT WOULD YOU LIKE TO?  </Text>
        <Text style={styles.text}>Discover new  </Text>
        <Text style={styles.text}>tasting experience</Text>
       </View>
      


      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
       <Swiper
          autoplay
          vertical={false}
          height={200}
          
          activeDotColor="#FF6347">
          
<View style={styles.slide}>
       

         <Image
              source={{uri:'https://images.unsplash.com/photo-1491739481003-2991327b66e2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNTMzNTEwfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
       </View>

       <View style={styles.slide}>
       

         <Image
              source={{uri:'https://images.unsplash.com/photo-1550807014-1236e91b92d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
       </View>
          <View style={styles.slide}>
            <Image
              source={{uri:'https://i.pinimg.com/736x/88/fb/92/88fb92deff2ebff5653d4e38e0426744.jpg'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />     

          </View>
       </Swiper> 
       </View>
        <View style={styles.searchfield}>
        <Icon2 style={styles.searchfieldicon} name='search1' size={16} color='#37af0c' />
         <TextInput style={styles.searchfieldtext} defaultValue='Search for restro.....'color='grey'/>
        </View>
       <View style={styles.searchfield}>
       <Text style={styles.near}>TOP RESTAURANTS</Text>
       </View>
       <Restaurant/>
         </ScrollView>
  )
                  }


 
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  header:{
    flexDirection: 'row',
    marginBottom:5,
    marginTop:10,
    paddingBottom:5,
    height:40,
    paddingTop:5,
    paddingLeft:5,
  },
   text:{
    color:'#37af0c',
    fontSize: 33,
    paddingLeft:8,
  },
  searchfield:{
    flexDirection:'row',
    marginLeft:5,
    paddingTop:14,
    paddingBottom:10,
  },
   near:{
    color:'#4a4b50',
    fontSize:18,
    paddingLeft:8,
  },
    sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  rate:{
    backgroundColor:'limegreen',
    width:50,
    borderRadius:10,
    flexDirection:'row',
    marginTop:5
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
   card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: 'limegreen',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'limegreen'
  },
  cardImgWrapper: {
    flex: 1,
    
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: 'limegreen',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#9d9d9f',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    marginTop:5,
    fontSize: 12,
    color: '#444',
    fontWeight:'bold'
  },
  texth:{
    color:'#4a4b50',
    fontSize: 13,
    paddingLeft:8,
    fontWeight:'bold'
  }

});
