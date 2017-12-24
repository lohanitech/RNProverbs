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
  Button
} from 'react-native'

import Mood from './mood-component/Mood'
import Proverbs from './proverbs-component/Proverbs';


export default class App extends Component<{}> {
  state = {
    rating: 1
  }
  constructor(props){
    super(props)
  }

  handleButtonPress = () => {
    let newnum = Math.floor(Math.random() * 5);
    console.log(newnum)
    this.setState({rating: newnum})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}} contentContainerStyle={styles.container}>
          <Proverbs />
        </View>
        <View style={styles.ratingContainer}>
          <Mood rating={this.state.rating} />
          <Button title="My Mood" onPress={this.handleButtonPress} />
        </View>
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
  }
});
