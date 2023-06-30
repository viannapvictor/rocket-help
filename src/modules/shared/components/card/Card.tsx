import React from 'react';
import { Box, Circle, HStack, Pressable, Text, VStack, useTheme, IPressableProps } from 'native-base';
import { MaterialCommunityIcons, Octicons  } from '@expo/vector-icons'; 

export type CardProps = {
    id: string;
    patrimony: string;
    date: string;
    status: 'open' | 'closed';
}



type Props = IPressableProps & {
    data: CardProps;
}

export function Card({data, ...rest}): Props {

    const {colors} = useTheme()

    const colorType = data.status === 'open' ? colors.secondary[700] : colors.green[300];

    return (
        <Pressable {...rest}>
            <HStack
            bg={"gray.600"}
            mb={4}
            alignItems={"center"}
            justifyContent={"space-between"}
            rounded={"sm"}
            overflow={"hidden"}
            >
                <Box h={"full"} w={2} bg={colorType} />

                <VStack flex={1} my={5} ml={5}>
                    <Text color={"white"} fontSize={"md"}>
                        Patrimonio {data.patrimony}
                    </Text>
                    <HStack>
                        <MaterialCommunityIcons name='clock' size={15} color={colors.gray[300]}/>
                        <Text 
                        fontSize={'xs'}
                        ml={1}
                        color={"gray.200"}
                        > 
                            {data.date}
                        </Text>
                    </HStack>
                </VStack>

                <Circle
                bg={"gray.500"}
                h={12}
                w={12}
                mr={5}
                >
                    {
                        data.status === "closed"
                        ?
                        <MaterialCommunityIcons name='check-decagram-outline' size={24} color={colorType}/>
                        :
                        <Octicons  name='hourglass' size={24} color={colorType}/>
                    }
                </Circle>

            </HStack>
        </Pressable>
    );

}