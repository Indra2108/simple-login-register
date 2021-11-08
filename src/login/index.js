import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORT STYLE
import Style from "./Style";

// IMPORT PICTURE
import open from '../assets/eye.png';
import close from '../assets/hidden.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    />
                </View>

                <View style={Style.inputbackground}>
                    <TextInput 
                        placeholder='Password'
                        style={Style.textinput}
                        secureTextEntry={this.state.hide}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity onPress={() => this.state.hide ? this.setState({ hide: false }) : this.setState({ hide: true })}> 
                        <Image source={this.state.hide ? open : close} style={Style.eye}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={Style.tombol}>
                    <Text style={Style.tulisantombol}>LOGIN</Text>
                </TouchableOpacity>

                <View style={Style.teksregister}>
                    <Text>Belum punya akun? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Register')} style={Style.register}>REGISTER</Text>
                </View>
            </View>
        )
    }
}