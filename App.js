import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nama: '',
      email: ''
    }
  }

  getMyStringValue = async (key) => {
    try {
      return await AsyncStorage.getItem(key)  
    } catch(e) {
      console.log("Error: " + e);
    }
    console.log('Done.')
  }

  setStringValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
      console.log("Error: " + e);
    }
    console.log("Done.");
  }

  simpan = async () => {
    this.getMyStringValue('Kunci', this.state)
  }
}