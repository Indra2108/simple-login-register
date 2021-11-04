import React, {Component} from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

// IMPORT STYLE
import Style from "./Style";

export default class Home extends Component {
    render() {
        return(
            <View style={Style.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={Style.tombol}>
                    <Text style={Style.texttombol}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={Style.tombol}>
                    <Text style={Style.texttombol}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}