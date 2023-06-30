import { Text } from 'native-base'


export const MainText = ({message}) => {
    return(
        <Text 
        color="#e1e1e6" fontSize={'20px'} bold
        textAlign={"center"}
        mb={'8px'}
        >{message}</Text>
    )
}

export const RegularText = ({message}) => {
    return (
        <Text color="#e1e1e6" fontSize={18} bold>
            {message}
        </Text>
    );
}