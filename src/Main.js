import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase/app";
import "firebase/firestore";
import login from './screens/Welcome/Login'
import Register from './screens/Registration/Register';
import Nav from "./components/BottomNavigation"
import {Text ,View} from 'react-native'

const firebaseConfig = {
  apiKey: "AIzaSyCJ54qgDBjVFC9VO1SHnLadR5A_yAH7kvo",
  authDomain: "paragonrepo-f5e81.firebaseapp.com",
  projectId: "paragonrepo-f5e81",
  storageBucket: "paragonrepo-f5e81.appspot.com",
  messagingSenderId: "640942818674",
  appId: "1:640942818674:web:f7c59c8878ed6b297909eb",
  measurementId: "G-BLSKEN5YKW"
};
if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

export class main extends Component{
    constructor(props){
        super(props);
        this.state={
            loaded:false,

        }
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) =>{
            if(!user){
                this.setState({
                    loggedIn:false,
                    loaded:true
                })
            }
            else{
                this.setState({
                    loggedIn:true,
                    loaded:true
                })
            }
        })
    }
    render(){
    const {loggedIn, loaded} =this.state;
    if(!loaded){
    }
    if(!loggedIn){
        return (
    
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name= "Login" component={login} options={{headerShown:false, animationEnabled:false}}/>
                    <Stack.Screen name= "Nav" component={Nav} options={{headerShown:false, animationEnabled:false}}/>
                    <Stack.Screen name= "Register" component={Register} options={{headerShown:false, animationEnabled:false}}/>
                    
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    return(
        <NavigationContainer>
        <Nav/>
    </NavigationContainer>
    )
    
}
}
export default main