import React, {Component} from "react";
// IMPORT LIBRARY
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// IMPORT SCREEN
import Home from './src/home/home';
import Login from './src/login/login';
import Register from "./src/register/register";

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>

      </NavigationContainer>
    )
  }
}