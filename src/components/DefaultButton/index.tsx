import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  handlePress: () => void;
}

export function DefaultButton({ title, handlePress, ...rest }: ButtonProps) {
  return (
    <Container
      activeOpacity={0.8}
      onPress={handlePress}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}