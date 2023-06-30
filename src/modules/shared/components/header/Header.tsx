import React from 'react';
import { HStack, Heading, IconButton, VStack, useTheme, StyledProps } from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

type Props = StyledProps & {
    title: string;
}

export function Header({title, ...rest}: Props) {

    const { colors } = useTheme();

    const navigation = useNavigation()

    const handleBack = () => {
      navigation.goBack()
    }

    return (
        <HStack 
        w={'full'}
        alignItems={'center'}
        bg={"gray.600"}
        pb={6}
        pt={12}
        {...rest}
        >
            <IconButton 
                icon={<AntDesign name='left' size={24} color={colors.gray[200]}/>}
                onPress={handleBack}
            />

            <Heading
            color={'gray.100'}
            textAlign={"center"}
            fontSize={'lg'}
            flex={1}
            ml={-6}
            >
                {title}
            </Heading>

        </HStack>
    );
}