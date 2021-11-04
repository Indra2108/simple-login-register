import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    tekslogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%'
    },
    login: {
        fontWeight: 'bold'
    },
})