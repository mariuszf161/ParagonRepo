import * as React from 'react';
import {View, Image, TextInput, Text, Pressable, KeyboardAvoidingView } from 'react-native'
import style from '../../constans/loginView'
import TopText from '../../constans/text'
import colors from '../../constans/colors'

function login ( {navigation} ) {
    return(
    <View style={style.container}>
        <TopText>Zaloguj się</TopText> 
            
            <View style={style.content}>
                <View>
                    <Image
                    style={{width:200, height:200}}
                    source={require('../../assets/icon.png')}/>
                </View>

                <View style={style.text}>
                    <TextInput placeholderTextColor={colors.white} placeholder={'Adres email'} textContentType="emailAddress" />
                </View>
            
                <View style={style.text}>
                    <TextInput placeholderTextColor={colors.white} placeholder={'Hasło'} secureTextEntry={true} />
                </View>

                <View style={style.restore}>
                    <Pressable onPress={() => navigation.navigate('Camera')}>
                        <Text style={style.restore}>Zapomniałeś hasła?</Text>
                    </Pressable>
                </View>

                <View style={style.buttons}>
                    <Pressable onPress={() => navigation.navigate('Camera')}>
                        <Text style={style.login}>Zaloguj</Text>
                    </Pressable> 
                </View>
                
            </View>
                <View style={style.registration}>
                  
                    <Pressable onPress={() => navigation.navigate('Registration')}>
                        <Text style={style.registrationtext}>Załóż bezpłatne konto</Text>
                    </Pressable>
                </View>
            </View>
            
            )
}
export default login