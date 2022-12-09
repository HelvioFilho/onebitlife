import { AndroidNativeProps, IOSNativeProps, WindowsNativeProps } from '@react-native-community/datetimepicker';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components';

import { ButtonModal, Close, Container, ContainerPicker, Content, ContentText, Footer, IconX, Title } from './styles';

interface CustomModalProps {
  children: React.ReactNode
  closeModal: () => void;
}

export function CustomModal({ children, closeModal }: CustomModalProps) {
  const { colors } = useTheme();
  return (
    <Container>
      <ContainerPicker>
        <Close
          onPress={closeModal}
        >
          <IconX
            name="md-close-circle"
            size={30}
            color={colors.white}
          />
        </Close>
        <Content>
          <ContentText>Mude o horário: </ContentText>
          {children}
        </Content>
        <Footer>
          <ButtonModal
            onPress={closeModal}
            color={colors.success}
          >
            <Title>Confirmar</Title>
          </ButtonModal>
        </Footer>
      </ContainerPicker>
    </Container>
  );
}