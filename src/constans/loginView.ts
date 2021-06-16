import {StyleSheet, StatusBar, Image} from "react-native"
import colors from '../constans/colors'

const Bar = StatusBar.currentHeight;

StatusBar.setBackgroundColor(colors.blue)

const style = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: colors.lightblue,
        paddingTop: Bar
    },
    content:{
        marginTop:30,
        alignItems: 'center',
        backgroundColor:colors.gray
    },
    buttons:{
        marginBottom: 40,
        marginTop: 20,
        backgroundColor:colors.green
    },
    button:{
        width:150,
        height:50,
        marginBottom:30,
        backgroundColor:colors.red
    },
    input:{
        backgroundColor:colors.blue,
        width: 300,
        marginBottom:15,
        borderRadius:30,
        paddingLeft:10
    },
    info:{
        fontSize:18,
        fontWeight:'bold',
        color: colors.blue,
        marginBottom: 5

    },
})


export default style; Bar