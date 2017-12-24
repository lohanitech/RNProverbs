/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Modal,
  TouchableOpacity
} from 'react-native'

import Mood from './mood-component/Mood'
import Proverbs from './proverbs-component/Proverbs';


export default class App extends Component<{}> {
  state = {
    rating: 1,
    modalVisible: false
  }
  constructor(props){
    super(props)
  }

  handleButtonPress = () => {
    let newnum = Math.floor(Math.random() * 5);
    console.log(newnum)
    this.setState({rating: newnum})
  }

  handleItemPress = item => {
    console.log(item)
    this.setState({modalVisible: true, selectedItem: item})
  }

  toggleModal = modalVisible => {
    this.setState({modalVisible: modalVisible})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}} contentContainerStyle={styles.container}>
          <Proverbs onPressItem={this.handleItemPress} />
        </View>
        <View style={styles.ratingContainer}>
          <Mood rating={this.state.rating} />
          <Button title="My Mood" onPress={this.handleButtonPress} />
        </View>
        <Modal 
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose = {() => { console.log("Modal has been closed.") }}
        >
            <View style = {styles.modal}>
              <TouchableOpacity style={styles.closeModalButton } onPress = {() => {
                  this.toggleModal(!this.state.modalVisible)}}>
                  
                  <Text>Close</Text>
              </TouchableOpacity>
              {this.state.selectedItem && <Text style = {styles.text}>{this.state.selectedItem.proverb}</Text>}
              
            </View>

        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingBottom: 20
  },
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 100
 },
 closeModalButton: {
  alignSelf: 'flex-end'
 },
 text: {
    color: '#3f2949',
    marginTop: 10,
    fontSize: 30
 }
});
