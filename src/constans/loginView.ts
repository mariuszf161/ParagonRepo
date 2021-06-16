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
        alignItems: 'center'
    },
    text:{
        backgroundColor: colors.buttons,
        width: 300,
        height: 60,
        borderRadius:50,
        paddingLeft:30,
        paddingTop:15,
        marginTop:10,
        marginBottom: 5,
    },
    login:{
        backgroundColor: colors.buttons,
        color:colors.white,
        borderRadius:30,
        borderColor: colors.white,
        borderWidth:3,
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 24,
        width:150,
        paddingTop:10,
        paddingBottom:10
    },
    buttons:{
        marginBottom: 15,
        marginTop: 20,
    },
    restore:{
        textAlign: 'right',
        color: colors.black,
        width:300,
        marginTop: 2,
        marginRight:5,
        fontSize:17,
        fontWeight:"bold"
    },
    registration:{
        bottom:0,
        width:310,
        marginTop:100,
        borderWidth:3,
        left:40,
        padding:10,
        borderColor: colors.buttons,
        borderRadius:30,
        
    },
    registrationtext:{
        color: colors.black,
        fontWeight: 'bold',
        fontSize:28,        
    },
    
})


export default style; Bar