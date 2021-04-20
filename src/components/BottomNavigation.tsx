import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';

import camera from "../screens/Camera/Camera"
import data from "../screens/DataBase/Data"
import setting from "../screens/Settings/Setting"

const Tab = createBottomTabNavigator();

function Nav(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Skaner" component ={camera} ></Tab.Screen>
            <Tab.Screen name="Paragony" component ={ data}></Tab.Screen>
            <Tab.Screen name="Ustawienia" component ={ setting}></Tab.Screen>

        </Tab.Navigator>
    )
}
export default Nav