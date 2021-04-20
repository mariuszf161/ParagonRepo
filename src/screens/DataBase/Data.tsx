import React, {FC} from 'react';
import { Text, StyleSheet} from 'react-native';

interface IDataProps{ }

const data: React.FC<IDataProps> = props =>
{
    return(
        <Text>Hello in DataSplash</Text>
    )
}
export default data