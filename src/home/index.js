import React, {Component} from "react";
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

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

const Style = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    tombol: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'blue',
        marginVertical: '10%'
    },
    texttombol: {
        color: 'white'
    }
})