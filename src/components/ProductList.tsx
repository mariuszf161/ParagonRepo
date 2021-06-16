import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { IState } from '../reducers';
import { IProductListReducer } from '../reducers/ProductListReducer';
import { removeElemProductList } from '../actions/ProductListAction';
import { ISingleElementList } from '../enitities/SingleElem';

const Wrapper = styled.View`
    margin: 20px 20px 0 20px;
`;

const SingleElementList = styled.View`
    border-radius: 15px;
    background: white;
    margin: 0 0 20px 0;
    padding: 5px 10px;
    border: 2px solid #0066FF;
    paddingBottom: 20px;
`;
const InputText = styled.Text`
    font-size: 20px;
    font-weight: 800;
`;
const ButtonContainer = styled.TouchableHighlight`
    margin: 7px auto 50px auto;
    
`
const RemoveButtonContainer = styled.TouchableHighlight`
    align-self: flex-end;  
    margin-top: -55px;
    margin-right: 10px;

`
type RemoveElem = ReturnType<typeof removeElemProductList>;

const ProductList: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const ProductListState = useSelector<IState, IProductListReducer>(state => state.productList)
    const goToForm = () => {
        props.switchView(true)
    }

    const deleteElem = (id: number) => {
        dispatch<RemoveElem>(removeElemProductList(id));
    }
    return (
        <Wrapper>
            {ProductListState.productList.map((elem: ISingleElementList, index: number) =>
                <SingleElementList key={index}>
                    <Text>Data Zakupu:</Text>
                    <InputText>{elem.dataZakupu}</InputText>
                    <Text>Numer Paragonu:</Text>
                    <InputText>{elem.numerParagonu}</InputText>
                    <Text>Nazwa produktu:</Text>
                    <InputText>{elem.nazwaProduktu}</InputText>
                    <Text>Dane sklepu:</Text>
                    <InputText>{elem.daneSklepu}</InputText>
                    <Text>Cena:</Text>
                    <InputText>{elem.cena}</InputText>
                    <Text>Okres Gwarancj:</Text>
                    <InputText>{elem.okresGwarancji}</InputText>
                    <Text>Opis:</Text>
                    <InputText>{elem.opis}</InputText>
                    <RemoveButtonContainer onPress={() => deleteElem(elem.id)}>   
                <MaterialCommunityIcons
                name='minus-circle'
                color='#0066FF'
                size={40} />
                </RemoveButtonContainer>
                </SingleElementList>
            )}
            <ButtonContainer onPress={goToForm} activeOpacity={1} underlayColor={'transparent'}>
            <MaterialCommunityIcons
                name='plus-circle'
                color='#0066FF'
                size={50} />
        </ButtonContainer>
        </Wrapper>
    )
};

export default ProductList;