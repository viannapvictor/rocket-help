import React from 'react';
import { Input, VStack } from 'native-base';
import { Header } from '../../shared/components/header/Header';
import { InputDefault, InputLogin } from '../../shared/components/inputs/Inputs';
import { ButtonDefault } from '../../shared/components/button/Button';

export function RegisterScreen() {
  return (
    <VStack flex={1} p={6} bg={"gray.600"}>
        <Header 
        title='Nova Solicitação'
        />
        <InputDefault 
        mt={4}
        placeholder='Número do Patrimônio'
        />
        <InputDefault 
        placeholder='Descrição do Problema'
        flex={1}
        textAlignVertical='top'
        multiline
        mt={5}
        />
        <ButtonDefault 
        message={"Cadastrar"}
        />
    </VStack>
  );
}