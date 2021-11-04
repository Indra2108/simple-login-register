import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

// IMPORT STYLE
import Style from "./Style";

export default class Register extends Component {
    render() {
        return(
            <View style={Style.container}>
                <View style={Style.inputbackground}>
                    <TextInput 
                        placeholder='Username'
                        style={Style.textinput}
                    />
                </View>

                <View style={Style.inputbackground}>
                    <TextInput 
                        placeholder='Password'
                        style={Style.textinput}
                    />
                </View>

                <TouchableOpacity style={Style.tombol}>
                    <Text style={Style.tulisantombol}>Register</Text>
                </TouchableOpacity>

                <View  style={Style.tekslogin}>
                    <Text>Sudah punya akun? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Login')} style={Style.login}>Log In</Text>
                </View>
            </View>
        )
    }
}