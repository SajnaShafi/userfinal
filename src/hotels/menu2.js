import React from 'react';
import { View, Text, FlatList,TouchableHighlight, Button, SafeAreaView,TouchableOpacity, processColor,StyleSheet,Image } from 'react-native';
import { Card } from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';

const productss = [

    {
      id: '1',
      name: 'Chicken Biriyani',
      imgUrl:'https://b.zmtcdn.com/data/pictures/2/19260752/8615d93d35f826990e5497544823071f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      price: '180',
      quantity: 0
    },
    {
      id: '2',
      imgUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/mutton-biryani-recipe-500x375.jpg',
      name: 'Mutton Biriyani',
      price: '350',
      quantity: 0

    },
    {
      id: '3',
      imgUrl: 'https://nishkitchen.com/wp-content/uploads/2015/03/Beef-Biryani-1B-480x360.jpg',
      name: 'Beef Biriyani',
      price: '350',
      quantity: 0

    },
    {
      id: '4',
      imgUrl:'https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800',
      name: 'Vegtable Biriyani',
      price: '150',
      quantity: 0
      
    },
    {
      id: '5',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D4yMZMxdGoQls0nh8rJpXP48r9NOCJHJJA&usqp=CAU',
      name: 'Chicken Noodles',
      price: '220',
      quantity: 0
      
    },
    {
      id: '6',
      imgUrl:'https://i0.wp.com/chefchoice.com.np/wp-content/uploads/2020/07/DSC_0032-2.jpg?fit=600%2C400&ssl=1',
      name: 'Mutton Noodles',
      price: '280',
      quantity: 0
      
    },
    {
      id: '7',
      imgUrl:'https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1.jpg',
      name: 'Vegtable Noodles',
      price: '150',
      quantity: 0

    },
    {
        id: '8',
        imgUrl:'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/29618.jpg?output-format=auto&output-quality=auto',
        name: 'Chicken Pasta',
        price: '200',
        quantity: 0
  
    },
    {
      id: '9',
      imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbAM8HbuOUZEII8Mx_x9s0LiwRoX2LzDmQA&usqp=CAU',
      name: 'Chicken Pasta Bake',
      price: '330',
      quantity: 0

    },
    {
      id: '10',
      imgUrl:'https://www.whiskaffair.com/wp-content/uploads/2019/02/Chicken-Fried-Rice-5.jpg',
      name: 'Chicken Fried Rice',
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
                    onPress={this.props.onSubtract1} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  -  </Text>
                  </TouchableOpacity>

                  <Text style={styles.text1}>{item.quantity}</Text>
          <TouchableOpacity
                    onPress={this.props.onAdd1} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>  +  </Text>
                  </TouchableOpacity>
        </View> 
        </View>
         
         
    )
  }
}

class Hotel2 extends React.Component {
  state = {
    productss,
  };

  onSubtract1 = (item, index) => {
    const productss = [...this.state.productss];
    productss[index].quantity -= 1;
    this.setState({ productss });
  }

  onAdd1 = (item, index) => {
    const productss = [...this.state.productss];
    productss[index].quantity += 1;
    this.setState({ productss });
  }

  render() {
    const { productss } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    productss.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'limegreen' }}>
        <FlatList
          data={this.state.productss}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract1(item, index)}
              onAdd={() => this.onAdd1(item, index)}
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
export default Hotel2;

