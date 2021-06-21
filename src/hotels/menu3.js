import React from 'react';
import { View, Text, FlatList,TouchableHighlight, Button, SafeAreaView,TouchableOpacity, processColor,StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';

const productsss = [

    {
      id: '1',
      name: 'Chicken Biriyani',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNj-MwaTSeascvzLKFtsc6XF8Ll36ohh3MA&usqp=CAU',
      price: '200',
      quantity: 0
    },
    {
      id: '2',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XY1OcoYejgh4_3iYetxeqUimQ3jYGcRjHQ&usqp=CAU',
      name: 'Chicken Alfam',
      price: '350',
      quantity: 0

    },
    {
      id: '3',
      imgUrl: 'https://vaya.in/recipes/wp-content/uploads/2019/01/Ideas-for-a-Perfect-Grilled-Chicken.jpg',
      name: 'Grilled Chicken',
      price: '350',
      quantity: 0

    },
    {
      id: '4',
      imgUrl:'https://thumbs.dreamstime.com/b/yemenis-style-festive-dish-baked-chicken-rice-arab-mandi-rice-yemenis-style-festive-dish-baked-chicken-rice-top-176060074.jpg',
      name: 'Chicken Mandhi',
      price: '900',
      quantity: 0
      
    },
    
    {
        id: '5',
        imgUrl:'https://mainkart.com/wp-content/uploads/2020/11/Shamam-Shake-450x450.jpg',
        name: 'Shamam Shake',
        price: '190',
        quantity: 0
  
    },
    {
      id: '6',
      imgUrl:'https://sipsmarter.org/wp-content/uploads/2020/04/glass-orange-juice-person-squeezing-orange-it_181624-1070.jpg',
      name: 'Orange Juice',
      price: '130',
      quantity: 0

    },
    {
      id: '7',
      imgUrl:'https://www.onionz.in/uploads/items/28492f1a069cd1e4fd4415a1612bbd6b.jpg',
      name: 'Chikku Shake',
      price: '150',
      quantity: 0

    },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
     
             
       <View style={styles.container}>
         
        <View style={styles.container1}>
          
          <View >
          <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
          </View>
          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
          <Text style={styles.text2}>{item.name}</Text>
          <Text style={styles.text3}>${item.price}</Text>
          </View>
        
          <TouchableOpacity
                    onPress={this.props.onSubtract2} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  -  </Text>
                  </TouchableOpacity>

                  <Text style={styles.text1}>{item.quantity}</Text>
          <TouchableOpacity
                    onPress={this.props.onAdd2} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  +  </Text>
                  </TouchableOpacity>
        </View> 
        </View>
         
         
    )
  }
}

class Hotel3 extends React.Component {
  state = {
    productsss,
  };

  onSubtract2 = (item, index) => {
    const productsss = [...this.state.productsss];
    productsss[index].quantity -= 1;
    this.setState({ productsss });
  }

  onAdd2 = (item, index) => {
    const productsss = [...this.state.productsss];
    productsss[index].quantity += 1;
    this.setState({ productsss });
  }

  render() {
    const { productsss } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    productsss.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'limegreen' }}>
        <FlatList
          data={this.state.productsss}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract2(item, index)}
              onAdd={() => this.onAdd2(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <View style={{flexDirection:'row'}}>
          <View>
         <Text style={styles.text1}>Total Quantity: {totalQuantity}</Text>
        <Text style={styles.text1}>Total Price: {totalPrice}</Text> 
        </View>
        <TouchableOpacity
                    onPress={this.props.navigation.navigate('Payment')} 
                    style={styles.button1}>
                    <Text style={styles.textbt}>Place Order</Text>
                  </TouchableOpacity>
         </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height:120,
    width:'100%',
    
    backgroundColor:'black',
    flexDirection: 'row'
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
  container1:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'black',
    borderBottomWidth:1,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    // marginLeft:3,
    // marginRight:11,
    marginTop:-1,
    paddingTop:5,
    paddingLeft:10,
    paddingRight:8,
    height:120,
    width:50,
    justifyContent:'space-between',
    
  },
  
  thumbnail: {
    width: 80,
    height: 80
  },
  text1:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  card: {
    height: 220,
    width: 100,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },
  text2:{
    color:'white',
    fontSize: 15,
    paddingRight: 50,
    paddingBottom:10,
    fontWeight:'bold'
    
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'limegreen',
    
  },
  textbt:{
    color:'white',
    fontSize: 15,
    paddingRight: 50,
    paddingBottom:10,
    fontWeight:'bold'
    
  },
  button1: {
    borderRadius: 8,
    backgroundColor: 'limegreen',
    padding:20,
    paddingLeft:100
    
    
  },
  text3:{
    color:'white',
    fontSize: 12,
     paddingRight: 80,
    // paddingBottom:10
  },
  
})
export default Hotel3;

