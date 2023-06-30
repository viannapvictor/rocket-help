import { Input, Icon, IInputProps } from 'native-base'
import { MaterialCommunityIcons, Octicons, MaterialIcons  } from '@expo/vector-icons'
import { useState } from 'react'
import { Pressable } from 'react-native'

export const InputPassword = ({...rest}: IInputProps) => {
    const [show, setShow] = useState(false);
    return(
        <Input variant={"unstyled"}  borderRadius={'6px'}
            placeholderTextColor={'gray.300'}
            color={"white"}
            w={'364px'}
            h={'56px'}
            bg="#121214" padding={'16px'}
            fontSize={'16px'}
            fontFamily={"body"}
            InputLeftElement={<Icon as={<Octicons name={'key'}/>} ml={'18.5px'} size={5}/>}
            InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} mr={'18.5px'} size={5} />
                </Pressable>}
            type={show ? "text" : "password"}
            bgColor={"gray.700"}
            {...rest}
        />
    )
}

export const InputLogin = ({...rest}: IInputProps) => {
    return (
        <Input variant={"unstyled"}  borderRadius={'8px'}
            placeholderTextColor={'gray.300'}
            w={'364px'}
            h={'56px'}
            bg="#121214" padding={'16px'}
            fontSize={'16px'}
            fontFamily={"body"}
            InputLeftElement={<Icon as={<MaterialCommunityIcons name={'email-outline'}/>} ml={'18.5px'} size={5}/>}
            keyboardType={'email-address'}
            marginX={'32px'}
            bgColor={"gray.700"}
            color={"white"}
            {...rest}
        />
    )
}

export const InputDefault = ({...rest}: IInputProps) => {
    return (
        <Input variant={"unstyled"}  borderRadius={'8px'}
            placeholderTextColor={'gray.300'}
            bg="#121214" 
            fontSize={'16px'}
            fontFamily={"body"}
            bgColor={"gray.700"}
            color={"white"}
            {...rest}
        />
    )
}