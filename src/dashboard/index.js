import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

// IMPORT STYLE
import Style from './Style'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={Style.container}>
                <Text>INI DASHBOARD</Text>
                <TouchableOpacity onPress={ } style={Style.tombolLogOut}>
                    <Text style={Style.teksLogOut}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}