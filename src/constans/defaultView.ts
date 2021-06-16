import {StyleSheet, StatusBar} from "react-native"
import colors from '../constans/colors'

const Bar = StatusBar.currentHeight;

StatusBar.setBackgroundColor(colors.blue)

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.lightblue,
        paddingTop: Bar,
        
    },
    date:{
        flexDirection:'row',
    },
    birth:{
        marginRight:15,
        height:50,
        width:70,
        borderWidth:3,
        borderRadius:20,
        paddingTop:12,
        alignItems:'center',
        borderColor: colors.buttons,
    },
    month:{
        marginRight:15,
        height:50,
        borderRadius:20,
        borderWidth:3,
        width:120,
        borderColor: colors.buttons,
    },
    year:{
        height:50,
        width:70,
        borderRadius:20,
        borderWidth:3,
        paddingTop:12,
        alignItems:'center',
        borderColor: colors.buttons,
    },
    reg:{
        marginTop:20,
        alignItems:'center',
    },
    info:{
        marginBottom:5,
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        marginRight:15,
        height:50,
        width:300,
        borderWidth:3,
        borderRadius:20,
        paddingTop:12,
        alignItems:'center',
        borderColor: colors.buttons,
    },
    buttonsectionReg:{
        height:60,
        width: 140,
        backgroundColor:colors.green,
        borderRadius: 20
    },
    buttonsectionCancel:{
        height:60,
        width: 140,
        backgroundColor:colors.redlow,
        marginRight:10,
        borderRadius: 20
    },
    buttonsection:{
        flexDirection:'row',
        marginRight:10,
        marginTop:10

    },
    buttons:{
        textAlign: 'center',
        paddingTop:15,
        fontSize:18,
        fontWeight:'bold',
        
    },
    grupe:{
        alignItems:'center'
    }
    
})


export default style; Bar