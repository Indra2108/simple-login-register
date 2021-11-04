import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default class Login extends Component {
    render() {
        return(
            <View style={Style.container}>
                <TextInput 
                    placeholder='Username'
                    style={Style.textinput}
                />

                <TextInput 
                    placeholder='Password'
                    style={Style.textinput}
                />

                <TouchableOpacity style={Style.tombol}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={Style.tombol}>
                    <Text >REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    textinput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    tombol: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        borderRadius: 10
    },
})