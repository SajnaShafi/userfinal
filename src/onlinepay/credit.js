import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native'
class Credit extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Are You Sure to Exit");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TextInput 
             placeholder="Card Holder's Name"
             keyboardType="email-address"
             underlineColorAndroid='transparent'
             onChangeText={text => setNAME(text)}/>
             <TextInput 
             placeholder="Card Number"
             keyboardType="email-address"
             underlineColorAndroid='transparent'
             onChangeText={text => setNUMBER(text)}/>
             <TextInput 
             placeholder="Valid Date"
             keyboardType="email-address"
             underlineColorAndroid='transparent'
             onChangeText={text => setDATE(text)}/>
             <TextInput 
             placeholder="CVV"
             keyboardType="email-address"
             underlineColorAndroid='transparent'
             onChangeText={text => setCVV(text)}/>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleM}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Credit Card</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginBottom:370
  },
  modalView: {
   
    backgroundColor: "#9d9d9f",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: 'limegreen',
    height:70
  },
  buttonClose: {
    backgroundColor: "limegreen",
  },
   textStyle: {
       marginStart:20,
      fontWeight: "bold",
      marginTop:15
   },
   textStyleM: {
    
   fontWeight: "bold",
   
},
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
});

export default Credit;