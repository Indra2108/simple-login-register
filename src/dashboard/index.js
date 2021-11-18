import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

// IMPORT STYLE
import Style from './Style'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Dashboard extends Component {
    removeItemStorage = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            // remove error
            console.log(error)
        }
        console.log('Done.')
    }

    render() {
        return (
            <View style={Style.container}>
                <Text>INI DASHBOARD</Text>
                <TouchableOpacity onPress={() => this.removeItemStorage('REGISTER')} style={Style.tombolLogOut}>
                    <Text style={Style.teksLogOut}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}