import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORT STYLE
import Style from "./Style";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hide: true
        }
    }


    render() {
        return(
            <View style={Style.container}>
                <View style={Style.inputbackground}>
                    <TextInput 
                        placeholder='Username'
                        style={Style.textinput}
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>

                <View style={Style.inputbackground}>
                    <TextInput 
                        placeholder='Password'
                        style={Style.textinput}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>

                <TouchableOpacity onPress={() => alert(`Username: ${this.state.username} Password: ${this.state.password}`)} style={Style.tombol}>
                    <Text style={Style.tulisantombol}>Register</Text>
                </TouchableOpacity>

                <View style={Style.tekslogin}>
                    <Text>Sudah punya akun? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Login')} style={Style.login}>Log In</Text>
                </View>
            </View>
        )
    }
}