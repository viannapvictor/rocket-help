import { Text, Input, Select, Icon, Button, CheckIcon, VStack } from 'native-base'

export const ButtonDefault = ({message, onPress}) => {
    return (
        <Button 
            bg={'green.700'} 
            p={4}
            rounded={"sm"}
            fontSize={"sm"}
            mt={4}
            _pressed={{bg: "green.500"}}
            onPress={onPress}

        >
            <Text color={'white'}>{message}</Text>
        </Button>
    );
}