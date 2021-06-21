import React from 'react';
import { View, Text, FlatList,TouchableHighlight, Button, SafeAreaView,TouchableOpacity, processColor,StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';

const products = [

    {
      id: '1',
      name: 'Chicken Biriyani',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHk9VW8o3S-uGXg1RL7aS7nXOajI6vMJe3g&usqp=CAU',
      price: '180',
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
      name: 'Grill Chicken',
      price: '350',
      quantity: 0

    },
    {
      id: '4',
      imgUrl:'https://4.imimg.com/data4/EW/PO/MY-10347843/chicken-burger-patty-500x500.jpg',
      name: 'Chicken Burger',
      price: '130',
      quantity: 0
      
    },
    {
      id: '5',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1p9WppN2eEOemlXrGzflaqxGGt16XeZ6_jA&usqp=CAU',
      name: 'Chicken Sandwich',
      price: '120',
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
      imgUrl:'https://www.tasteofhome.com/wp-content/uploads/2018/08/Slice-of-cheese-pizza.jpg',
      name: 'Cheese Pizza',
      price: '350',
      quantity: 0

    },
    {
        id: '8',
        imgUrl:'https://www.diplomatpharmacy.com/-/media/Blog-Images/1912-Individual-Recipe-Updates/1912-Individual-Recipe-Updates-Cover-Photos/1912-Milk-and-Avocado-Smoothie-copy.jpg',
        name: 'Avocado Shake',
        price: '200',
        quantity: 0
  
    },
    {
      id: '9',
      imgUrl:'https://www.cityunbox.com/media/catalog/product/cache/65daba3010571badacafda02aba53f0a/o/r/orio_shake.jpg',
      name: 'Oreo Shake',
      price: '130',
      quantity: 0

    },
    {
      id: '10',
      imgUrl:'https://content3.jdmagicbox.com/comp/noida/m3/011px120.x120.110223085355.q2m3/catalogue/baba-mango-shake-sector-62-noida-p0nay.jpg',
      name: 'Mango Shake',
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
                    onPress={this.props.onSubtract} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  -  </Text>
                  </TouchableOpacity>

                  <Text style={styles.text1}>{item.quantity}</Text>
          <TouchableOpacity
                    onPress={this.props.onAdd} 
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
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'limegreen' }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
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
                     onPress={this.props.navigation.navigate("Payment")} 
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

