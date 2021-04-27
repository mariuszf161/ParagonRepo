import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, Text } from 'react-native';

import { useDispatch } from 'react-redux';
import colors from '../constans/colors';
import { setNewElemProductList } from '../actions/ProductListAction'
import { ISingleElementList } from '../enitities/SingleElem';


const Wrapper = styled.View`
    margin: 0px 20px 0px 20px;
    
    
`;
const CustomTextInput = styled.TextInput`
    border-radius: 15px;
    margin: 5px auto;
    padding: 5px 10px 5px 10px;
    color: black;
    width: 100%;
    border: 2px solid #0066FF;
    background: white;
    
`;
const ButtonContainer = styled.TouchableHighlight`
    margin: 20px auto;
    padding: 0;
    background: ${colors.green};
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

const CancelButtonContainer = styled.TouchableHighlight`
    margin: 0 auto;
    padding: 0;
    background: red;
    width: 100px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`
const ButtonContent = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #222;
    margin-top: -2px;
`
const CancelButtonContent = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: white;
    margin-top: -2px;
`
const Label = styled.Text`

`

type SetNewElemTodoList = ReturnType<typeof setNewElemProductList>

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();

    const goToList = () => {
        props.switchView(false)
    }

    const [dataZakupuInput, setDataZakupuInput] = useState<string>('');
    const [numerParagonuInput, setNumerParagonuInput] = useState<string>('');
    const [nazwaProduktuInput, setNazwaProduktuInput] = useState<string>('');
    const [daneSklepuInput, setDaneSklepuInput] = useState<string>('');
    const [cenaInput, setCenaInput] = useState<string>('');
    const [okresGwarancjiInput, setOkresGwarancjiInput] = useState<string>('');
    const [opisInput, setOpisInput] = useState<string>('');

    const dataZakupuValueChange = (txt) => {
        setDataZakupuInput(txt.nativeEvent.text)
    }
    const numerParagonuValueChange = (txt) => {
        setNumerParagonuInput(txt.nativeEvent.text)
    }
    const nazwaProduktuValueChange = (txt) => {
        setNazwaProduktuInput(txt.nativeEvent.text)
    }
    const daneSklepuValueChange = (txt) => {
        setDaneSklepuInput(txt.nativeEvent.text)
    }
    const cenaValueChange = (txt) => {
        setCenaInput(txt.nativeEvent.text)
    }
    const okresGwarancjiValueChange = (txt) => {
        setOkresGwarancjiInput(txt.nativeEvent.text)
    }
    const opisValueChange = (txt) => {
        setOpisInput(txt.nativeEvent.text)
    }

    const saveDate = () => {
        dispatch<SetNewElemTodoList>(setNewElemProductList({
            dataZakupu: dataZakupuInput,
            numerParagonu: numerParagonuInput,
            nazwaProduktu: nazwaProduktuInput,
            daneSklepu: daneSklepuInput,
            cena: cenaInput,
            okresGwarancji: okresGwarancjiInput,
            opis: opisInput,
            id: new Date().getTime()
        } as ISingleElementList
        ));
        props.switchView(false)
    }
    return (
        <Wrapper>
            <Label>Data zakupu:</Label>
            <CustomTextInput value={dataZakupuInput} onChange={dataZakupuValueChange} placeholder="Data zakupu"/>
            <Label>Numer paragonu:</Label>
            <CustomTextInput value={numerParagonuInput} onChange={numerParagonuValueChange} placeholder="Numer paragonu"/>
            <Label>Nazwa produktu:</Label>
            <CustomTextInput value={nazwaProduktuInput} onChange={nazwaProduktuValueChange} placeholder="Nazwa produktu"/>
            <Label>Dane sklepu:</Label>
            <CustomTextInput value={daneSklepuInput} onChange={daneSklepuValueChange} placeholder="Dane sklepu"/>
            <Label>Cena:</Label>
            <CustomTextInput value={cenaInput} onChange={cenaValueChange} placeholder="Cena"/>
            <Label>Okres gwarancji:</Label>
            <CustomTextInput value={okresGwarancjiInput} onChange={okresGwarancjiValueChange} placeholder="Okres gwarancji"/>
            <Label>Opis:</Label>
            <CustomTextInput value={opisInput} onChange={opisValueChange} placeholder="Opis"/>
            <ButtonContainer onPress={saveDate}>
            <ButtonContent>Dodaj</ButtonContent>
            </ButtonContainer>
            <CancelButtonContainer onPress={goToList}>
            <CancelButtonContent>Anuluj</CancelButtonContent>
            </CancelButtonContainer>
        </Wrapper>
        
    )
};

export default Form;