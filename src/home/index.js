import React, {Component} from "react";
import {View, TouchableOpacity} from 'react-native';
import style from './style'

export default class Home extends Component {
    render() {
        return(
            <View style={style.container}>
                <TouchableOpacity>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}