import React, {FC} from 'react';
import { View } from 'react-native';
import style from '../../constans/defaultView';
import TopText from '../../constans/text';

interface IcameraProps{ }

const camera: React.FC<IcameraProps> = props=>

{
    return(
    <View style={style.container}><TopText>Skaner</TopText></View>
    )
    
}


export default camera