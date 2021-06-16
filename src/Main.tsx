import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './screens/Welcome/Login'
import singup from '../src/screens/Registration/Singup'
import Nav from "./components/BottomNavigation"

interface IMainProps {}
const Stack = createStackNavigator();

const main: FC<IMainProps> = props =>{
    return (
        <NavigationContainer>
            <Stack.Navigator> 
                <Stack.Screen name= "Login" component={login} options={{headerShown:false, animationEnabled:false}}/>
                <Stack.Screen name= "Registration" component={singup} options={{headerShown:false, animationEnabled:false}}/>
                <Stack.Screen name= "Camera" component={Nav} options={{headerShown:false, animationEnabled:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default main;