import {StyleSheet, StatusBar} from "react-native"
import colors from '../constans/colors'

const Bar = StatusBar.currentHeight;

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.lightblue,
        paddingTop: Bar,      
    },
})


export default style