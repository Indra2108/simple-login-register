import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style";

export default class Login extends Component {
    render() {
        return(
            <View style={style.container}>
                <TextInput 
                    placeholder='Username'
                    style={style.textinput}
                />

                <TextInput 
                    placeholder='Password'
                    style={style.textinput}
                />

                <TouchableOpacity style={style.tombol}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.tombol}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}