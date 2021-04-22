import * as React from 'react';
import { View} from 'react-native';

import style from '../../constans/defaultView';
import TopText from '../../constans/text'

interface IDataProps{ }

const data: React.FC<IDataProps> = props =>
{
    return(
    <View style={style.container}>
        <TopText>Hello in DataSplash</TopText></View>
    )
}
export default data