import React, {Component} from 'react'
import {View, Button, TextInput} from 'react-native'
import firebase from 'firebase';
export class Login1 extends Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: '',
        }
        this.onSingUp = this.onSingUp.bind(this)
    }
    onSingIn(){
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) =>{
        console.log(result)})
        .catch((error)=>{
            console.log(error)
        })
    }
    render (){
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <TextInput 
                placeholder="Mail"
                onChangeText={(email) => this.setState({email})}
                />
                <TextInput 
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
                <Button onPress={()=> this.onSingIn()}
                title="Zaloguj się"
                />
            </View>
        )
    }
}
export default Login1