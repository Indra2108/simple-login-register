import React, {Component} from "react";
// IMPORT LIBRARY
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// IMPORT SCREEN
import Home from './src/home';
import Login from './src/login';
import Register from "./src/register";

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return(
      // <Home />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HOME'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}