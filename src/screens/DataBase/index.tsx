import * as React from 'react';
import { View} from 'react-native';
  
import { FC, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Form from '../../components/Form';
import ProductList from '../../components/ProductList';

import style from '../../constans/defaultView';
import TopText from '../../constans/text'
import { Text, StyleSheet } from 'react-native';
// interface IDataProps{ }

const HomeView = styled.ScrollView`
    padding-top: 50px
    min-height: 100%;
`;

// const data: React.FC<IDataProps> = props =>
// {
//     return(
//         <HomeView>
//             <View style={style.container}>
//                 <TopText>Moje paragony</TopText> 
//             </View>
//         </HomeView>
//     )
// }
const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'red'
    }
  });


const data1 = ({navigation}) => {
     const [FormViwe, setFromView] = useState<boolean>(false);

     return (
        <HomeView style={style.container}>
          <TopText>Moje paragony</TopText>
            {FormViwe ? (
                <Form switchView={setFromView}/>
            ) : (
                <ProductList switchView={setFromView}/>
            )}
        </HomeView>
        
    );
};
export default data1