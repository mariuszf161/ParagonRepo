import React, {Component} from 'react'
import {View, Button, TextInput, Text} from 'react-native'
import firebase from 'firebase';
import style from '../../constans/loginView'
import TopText from '../../constans/text'
export class Register extends Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: '',
            name: ''
        }
        this.onSingUp = this.onSingUp.bind(this)
    }
    onSingUp(){
        const {email, password, name} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) =>{
        console.log(result)})
        .catch((error)=>{
            console.log(error)
        })

    }
    render (){
        return(
            <View style={style.container}>
                <View><TopText>Zarejestruj się</TopText></View>
                <View style={style.content}>
                    <Text style={style.info}>Imię</Text>
                <TextInput style={style.input} 
                placeholder="Name"
                onChangeText={(name) => this.setState({name})}
                />
                <Text style={style.info}>E-Mail</Text>
                <TextInput style={style.input} 
                placeholder="Mail"
                onChangeText={(email) => this.setState({email})}
                />
                <Text style={style.info}>Hasło</Text>
                <TextInput style={style.input}  
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
                <Button style={style.abcd} onPress={()=> this.onSingUp()}
                title="Gotowe"
                /></View>
            </View>
        )
    }
}
export default Register