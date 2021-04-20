import React, { FC } from 'react';
import { NavigationContainer} from '@react-navigation/native'
import Nav from "./components/BottomNavigation"

interface IMainProps {}

const main: FC<IMainProps> = props =>{
return (

    <NavigationContainer>
        <Nav/>
    </NavigationContainer>
)
}
export default main;