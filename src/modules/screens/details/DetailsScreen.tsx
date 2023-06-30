import React from 'react';
import { VStack, Text } from 'native-base';
import { Header } from '../../shared/components/header/Header';
import { useRoute } from '@react-navigation/native';

type RouteParams = {
  orderId: string;
}

export function DetailsScreen() {

  const route = useRoute()

  const {orderId} = route.params as RouteParams;

  return (
    <VStack flex={1} bg={"gray.700"}>
        <Header title='solicitação' />
        <Text color={"white"}>
          {orderId}
        </Text>
    </VStack>
  );
}