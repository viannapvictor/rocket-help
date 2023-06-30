import React from 'react';
import { VStack } from 'native-base';
import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
    titile: string;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filters({title, isActive = false, type, ...rest}) {
    const {colors} = useTheme()

    const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
    variant={"outline"}
    borderWidth={isActive ? 1 : 0}
    bgColor="gray.600"
    borderColor={colorType}
    flex={1}
    size="sm"
    {...rest}
    >
        <Text 
        color={isActive ? colorType : "gray.300"} 
        fontSize={"xs"}
        textTransform={"uppercase"}
        >
            {title}
        </Text>
    </Button>
  );
}