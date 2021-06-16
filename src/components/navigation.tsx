import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import singup from "../screens/Singin/singup";
import singin from "../screens/Singin/singin";
import Login from "../screens/Welcome/Login";

const RootStack = createStackNavigator();
const RootStackScreen= ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="login" component={Login}></RootStack.Screen>
        <RootStack.Screen name="singup" component={singup}></RootStack.Screen>
        <RootStack.Screen name="singin" component={singin}></RootStack.Screen>
    </RootStack.Navigator>
);
export default RootStackScreen;