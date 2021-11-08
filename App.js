import React, {Component} from "react";
// IMPORT LIBRARY
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// IMPORT SCREEN
import Home from './src/home';
import Login from './src/login';
import Register from "./src/register";
import Dashboard from "./src/dashboard";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HOME'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}