import React from 'react';
import { View, Text, FlatList,TouchableHighlight, Button, SafeAreaView,TouchableOpacity, processColor,StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';

const productssss = [

    {
      id: '1',
      imgUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bjp1yhkhdttdlq84vhjj',
      name: 'Grilled Chicken',
      price: '350',
      quantity: 0

    },
    {
      id: '2',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVsvRRdM3wJqSQCbbl5Chqp601rB6NShbjQ&usqp=CAU',
      name: 'Chicken Alfam',
      price: '350',
      quantity: 0

    },
    {
      id: '3',
      imgUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bjp1yhkhdttdlq84vhjj',
      name: 'Chicken Biriyani',
      price: '180',
      quantity: 0

    },
    {
      id: '4',
      imgUrl:'https://static.toiimg.com/thumb/53886706.cms?width=1200&height=900',
      name: 'Chicken Noodles',
      price: '130',
      quantity: 0
      
    },
    {
      id: '5',
      imgUrl:'data:image/jpeg;base64,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',
      name: 'Kubbos',
      price: '40',
      quantity: 0
      
    },
    {
      id: '6',
      imgUrl:'https://cheflolaskitchen.com/wp-content/uploads/2018/07/Easy-Homemade-Chicken-Shawarma39.jpg',
      name: 'Shawarma',
      price: '80',
      quantity: 0
      
    },
    {
      id: '7',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGLMcs6v55FoK7xpE6z25Rm_40Kz12j11sw&usqp=CAU',
      name: 'Butter Nan',
      price: '20',
      quantity: 0

    },
    {
        id: '8',
        imgUrl:'https://b.zmtcdn.com/data/pictures/2/90392/5bc645dbf2bed815eb65c8e5f1d7b5ea.jpg?fit=around|750:500&crop=750:500;*,*',
        name: 'Ruman Rotti',
        price: '8',
        quantity: 0
  
    },
    {
      id: '9',
      imgUrl:'https://previews.123rf.com/images/vm2002/vm20021610/vm2002161000571/65650785-kerala-porotta-indian-layered-paratha-selective-focus.jpg',
      name: 'Pototta',
      price: '10',
      quantity: 0

    },
    {
      id: '10',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY3oX7VYVdXAeyK9vqLtPRCPSDZIyqhoP6A&usqp=CAU',
      name: 'Chicken Fried Rice',
      price: '180',
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
                    onPress={this.props.onSubtract3} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  -  </Text>
                  </TouchableOpacity>

                  <Text style={styles.text1}>{item.quantity}</Text>
          <TouchableOpacity
                    onPress={this.props.onAdd3} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  +  </Text>
                  </TouchableOpacity>
        </View> 
        </View>
         
         
    )
  }
}

class Hotel1 extends React.Component {
  state = {
    productssss,
  };

  onSubtract3 = (item, index) => {
    const productssss = [...this.state.productssss];
    productssss[index].quantity -= 1;
    this.setState({ productssss });
  }

  onAdd3 = (item, index) => {
    const productssss = [...this.state.productssss];
    productssss[index].quantity += 1;
    this.setState({ productssss });
  }

  render() {
    const { productssss } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    productssss.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'limegreen' }}>
        <FlatList
          data={this.state.productssss}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract3(item, index)}
              onAdd={() => this.onAdd3(item, index)}
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
export default Hotel1;

