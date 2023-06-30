import { useState} from 'react';
import { Center, FlatList, HStack, Heading, IconButton, Text, VStack, useTheme } from 'native-base';
import Logo from '../../../assets/logo_secondary.svg'
import { FontAwesome5 , Octicons   } from '@expo/vector-icons'
import { Filters } from '../../shared/components/filters/Filters';
import { Card, CardProps } from '../../shared/components/card/Card';
import { ButtonDefault } from '../../shared/components/button/Button';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {

  const {colors} = useTheme();

  const [isSelected, setIsSelected] = useState<'open' | 'closed' >('open')
  const [orders, setOrders] = useState<CardProps[]>([
    {
      id: "123",
      patrimony: "123456",
      date: "18/05/2024 às 17:30",
      status: "open"
    }
])

  const navigation = useNavigation()

  const handelOrder = () => {
    navigation.navigate('register')
  }

  const handleOpenDetails = (orderId: String) => {
    navigation.navigate('details', { orderId })
  }

  return (
    <VStack flex={1} pb={6} bg={"gray.700"}>
      <HStack
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"gray.600"}
      pt={12}
      pb={5}
      px={6}
      >
        <Logo />

        <IconButton 
          icon={<Octicons name={'sign-out'} size={26} color={colors.gray[300]} />}
        />

      </HStack>
      <VStack flex={1} px={6}>
        <HStack
        w={"full"}
        mt={8}
        mb={4}
        justifyContent={"space-between"}
        alignContent={"center"}
        >
          <Heading color={"gray.100"}>
            Meus Chamados
          </Heading>
          <Text color={"gray.200"} >
            3
          </Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filters 
            type={"open"}
            title={"em andamento"}
            onPress={() => setIsSelected('open')}
            isActive={isSelected === 'open'}
          />
          <Filters 
            type={"closed"}
            title={"finalizados"}
            onPress={() => setIsSelected('closed')}
            isActive={isSelected === 'closed'}
          />
        </HStack>
        <FlatList 
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card data={item} onPress={() => handleOpenDetails(item.id)}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle = {{ paddingBottom: 50}}
          ListEmptyComponent={() => (
            <Center>  
              <FontAwesome5 name="rocketchat" size={40} color={colors.gray[300]} />
              <Text 
              color={"gray.300"}
              fontSize={'xl'}
              mt={6}
              textAlign={'center'}
              >
                Você ainda não possui {'\n'}
                solicitações {isSelected === 'open' ? 'em andamento' : 'finalizadas.'}
              </Text>
                </Center>
              )}
            />
        <ButtonDefault 
        message={'Nova Solicitação'}
        onPress={handelOrder}
        />
      </VStack>
    </VStack>
  );
}