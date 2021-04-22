import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import colors from '../constans/colors';

import camera from "../screens/Camera/Camera"
import data from "../screens/DataBase/Data"
import setting from "../screens/Settings/Setting"

const Tab = createBottomTabNavigator();

function Nav(){
    return(
        <Tab.Navigator 
        initialRouteName= "Skaner"
        tabBarOptions ={{
            activeBackgroundColor: colors.blue,
            activeTintColor: colors.green,
            inactiveBackgroundColor: colors.blue
            
            
        }}
        >
            <Tab.Screen name="Paragony" component ={ data}></Tab.Screen>
            <Tab.Screen name="Skaner" component ={camera} ></Tab.Screen>
            <Tab.Screen name="Ustawienia" component ={setting}></Tab.Screen>

        </Tab.Navigator>
    )
}
export default Nav