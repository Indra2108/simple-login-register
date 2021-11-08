import { StyleSheet } from "react-native";

// IMPORT LIBRARY
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
        justifyContent: 'center',
    },
    inputbackground:{
        backgroundColor: 'yellow',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textinput: {
        padding: 10,
    },
    eye:{
        width: wp('8%'),
        height: hp('3%'),
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