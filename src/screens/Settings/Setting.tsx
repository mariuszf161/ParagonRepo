import * as React from 'react';
import {ScrollView} from 'react-native';

import style from '../../constans/defaultView'
import TopText from '../../constans/text';


interface IsettingProps{ }

const setting: React.FC<IsettingProps>  = props =>

{
    return(
    <ScrollView style={style.container}><TopText>Hello in Settingsplash</TopText></ScrollView>
    )
    
}


export default setting