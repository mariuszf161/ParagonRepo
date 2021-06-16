import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import style from '../../constans/loginView'
import TopText from '../../constans/text'
import colors from '../../constans/colors'

export default function Login({ navigation}){
    return(
        <View style={style.container}>
            <TopText>Zaloguj się</TopText>
            <View style={style.content}>
            <View>
                    <Image
                    style={{width:200, height:200}}
                    source={require('../../assets/icon.png')}/>
                </View>
            <View style={style.buttons}>
            <View style={style.button}><Button
            title="Zaloguj się"
            onPress={()=> navigation.navigate("Nav")}/></View>
            <Button 
            title="Zarejestruj się"
            onPress={()=> navigation.navigate("Register")}/>
            </View></View>
        </View>
    )
}