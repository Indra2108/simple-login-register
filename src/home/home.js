import React, {Component} from "react";
import {View, TouchableOpacity} from 'react-native';
import style from './style'

export default class Home extends Component {
    render() {
        return(
            <View style={style.container}>
                <TouchableOpacity style={style.tombol}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.tombol}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}