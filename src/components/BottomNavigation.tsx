import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import colors from '../constans/colors';

import camera from "../screens/Camera/Camera"
import data from "../screens/DataBase"
import setting from "../screens/Settings/Setting"
import {FontAwesome5} from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();
 
const Nav = () =>{
    return(
        <Tab.Navigator 
        initialRouteName= "Skaner"
        tabBarOptions ={{
            activeBackgroundColor: colors.green,
            activeTintColor: colors.black,
            inactiveBackgroundColor: colors.blue,
            inactiveTintColor: colors.white,
        }}
        >
            <Tab.Screen name="Paragony" component ={data}
            options = {{
                tabBarIcon: ({size, color}) =>(
                    <FontAwesome5 name="receipt" color={color} size={size}/>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name="Skaner" component ={camera} 
            options ={{
                unmountOnBlur: true,
                tabBarIcon:({size, color}) =>
                <FontAwesome5 name="camera" color={color} size={size}/>
            }}
            ></Tab.Screen>
            <Tab.Screen name="Ustawienia" component ={setting}
            options={{
                tabBarIcon:({size, color}) =>(
                    <FontAwesome5 name="cog" color={color} size={size}/>
                )
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}
export default Nav