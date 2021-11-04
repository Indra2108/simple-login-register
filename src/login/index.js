import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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

const Style = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        justifyContent: 'center',
        
    },
    inputbackground:{
        backgroundColor: 'yellow',
        marginVertical: 10
    },
    textinput: {
        padding: 10,
    },
    tombol: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        backgroundColor: 'blue', 
        marginTop: '10%'
    },
    tulisantombol: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    teksregister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%'
    },
    register: {
        fontWeight: 'bold'
    },
    
})