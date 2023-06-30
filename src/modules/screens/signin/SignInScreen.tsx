import {Box, Heading, Text, VStack} from 'native-base'
import { InputLogin, InputPassword } from '../../shared/components/inputs/Inputs';
import { useState } from 'react';
import { MainText } from '../../shared/components/texts/Texts';
import { ButtonDefault } from '../../shared/components/button/Button';
import Logo from '../../../assets/logo_primary.svg'

export default function SignInScreen() {

    const [login, setLogin] = useState({ email: '', password: '' });

    return(
    <Box safeArea flex={1} bg="gray.600" alignItems={'center'}>
        <VStack alignItems={'center'} space={'16px'} px={8} pt={24}>
            <Logo />
            <Heading fontSize={"xl"} mt={20} mb={6}>
            <MainText message={'Acesse sua Conta'}/>
            </Heading>
            <InputLogin
            placeholder={'E-mail'}
            value={login.email}
            onChangeText={(email: string) => setLogin(value => ({...value, email}))}
            />
            <InputPassword
            placeholder={'Senha'}
            value={login.password}
            onChangeText={(password: string) => setLogin(value => ({...value, password}))}
            />
            <ButtonDefault 
            message={'Entrar'}
            />
        </VStack>
    </Box>
    );
}