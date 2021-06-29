
 import React,{ Component }from 'react';
 import {NavBarCustom}from './src/NavBarCustom';
import Homescreen from './src/homescreen';
import Wallet from './src/Wallet';
import Login from './src/Login';
import Support from './src/Support';
import MY_Profile from './src/MY_Profile';
import Location from './src/Location';
import Signin from './src/Signin';
import Splashscreen from './src/Splashscreen';
import PaymentMethod from './src/payment';
import Detail from './src/details';

import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default class app extends Component {
  render() {
    return (
     
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <NavBarCustom {...props} />}
         drawerStyle={{
          width:320,
        }}>
          
          <Drawer.Screen name="Splashscreen" component={Splashscreen}/>
          <Drawer.Screen name="Login" component={Login}/>
          <Drawer.Screen name="Signin" component={Signin}/> 
          <Drawer.Screen name="Home" component={Homescreen} /> 
          <Drawer.Screen name="My Orders" component={Login} />
          <Drawer.Screen name="Wallet" component={Wallet} />
          <Drawer.Screen name="Account" component={MY_Profile} />
          <Drawer.Screen name="Support" component={Support} />
          <Drawer.Screen name="Profile" component={MY_Profile}/> 
          <Drawer.Screen name="Location" component={Location}/> 
          {/* <Drawer.Screen name="My orders" component={Myorder}/> */}
          <Drawer.Screen name="Payment" component={PaymentMethod}/>
          <Drawer.Screen name="Detail" component={Detail}/>
          </Drawer.Navigator>
      </NavigationContainer>
      
    );
  }
}

