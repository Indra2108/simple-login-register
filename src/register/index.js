import React, {Component} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default class Register extends Component {
    render() {
        return(
            <View style={Style.container}>
                <Text>INI REGISTER</Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})