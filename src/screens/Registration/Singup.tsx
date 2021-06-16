import * as React from 'react';
import { useState } from 'react';

import style from '../../constans/defaultView'
import TopText from '../../constans/text';
import {View,TextInput, Picker,Text, Pressable } from 'react-native'
import colors from '../../constans/colors'


function singup( {navigation} ) {
const [selectedValue, setSelectedValue] = useState("Miesiąc");
    return(
        <View style={style.container}>
            <TopText>Zarejestruj się</TopText>
            <View style={style.reg}><Text style={style.info}>Podaj datę urodzenia</Text>
            <View style={style.date}>
                <View style= {style.birth}><TextInput placeholderTextColor={colors.black} placeholder="Dzień" keyboardType='numeric'></TextInput></View>
              <View style={style.month}><Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 120 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Styczeń" value="Styczeń" />
        <Picker.Item label="Luty" value="Luty" />
        <Picker.Item label="Marzec" value="Marzec" />
        <Picker.Item label="Kwiecień" value="Kwiecień" />
        <Picker.Item label="Maj" value="Maj" />
        <Picker.Item label="Czerwiec" value="Czerwiec" />
        <Picker.Item label="Lipiec" value="Lipiec" />
        <Picker.Item label="Sierpień" value="Sierpień" />
        <Picker.Item label="Wrzesień" value="Wrzesień" />
        <Picker.Item label="Październik" value="Październik" />
        <Picker.Item label="Listopad" value="Listopad" />
        <Picker.Item label="Grudzień" value="Grudzień" />
        </Picker></View>
                <View style={style.year}><TextInput placeholder="Rok" keyboardType='numeric'></TextInput></View>
                </View>
                </View>
                <View style={style.reg}><Text style={style.info}>Podaj imię</Text>
                <View style={style.input}><TextInput placeholder="Imię" style={{height:25, width:280}}></TextInput></View>
                </View>
                <View style={style.reg}><Text style={style.info}>Podaj nazwisko</Text>
                <View style={style.input}><TextInput placeholder="Nazwisko" style={{height:25, width:280}}></TextInput></View>
                </View>
                <View style={style.reg}><Text style={style.info}>Wprowadź e-mail</Text>
                <View style={style.input}><TextInput placeholder="E-mail" style={{height:25, width:280}}></TextInput></View>
                </View>
                <View style={style.reg}><Text style={style.info}>Wprowadź hasło</Text>
                <View style={style.input}><TextInput placeholder="Hasło" style={{height:25, width:280}}></TextInput></View>
                </View>
                <View style={style.reg}><Text style={style.info}>Potwierdź hasło</Text>
                <View style={style.input}><TextInput placeholder="Hasło" style={{height:25, width:280}}></TextInput></View>
                </View>
                <View style={style.grupe}>
                <View style={style.buttonsection}>
                    <Pressable style={style.buttonsectionCancel} onPress={() => navigation.navigate('Login')}>
                        <Text style={style.buttons}>Anuluj</Text>
                    </Pressable> 
                    <Pressable style={style.buttonsectionReg} onPress={() => navigation.navigate('Camera')}>
                        <Text style={style.buttons}>Zarejestruj</Text>
                    </Pressable>
                </View></View>
                </View>
              )
}
export default singup