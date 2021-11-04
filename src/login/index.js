import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

// IMPORT STYLE
import Style from "./Style";

export default class Login extends Component {
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
                    <Text style={Style.tulisantombol}>Log In</Text>
                </TouchableOpacity>

                <View  style={Style.teksregister}>
                    <Text>Belum punya akun? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Register')} style={Style.register}>REGISTER</Text>
                </View>
            </View>
        )
    }
}