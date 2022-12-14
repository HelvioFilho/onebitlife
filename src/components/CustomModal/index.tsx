import React from 'react';
import { useTheme } from 'styled-components';

import {
  ButtonModal,
  Close,
  Container,
  ContainerPicker,
  Content,
  ContentText,
  Footer,
  IconX,
  TextWarn,
  Title
} from './styles';

interface CustomModalProps {
  children?: React.ReactNode;
  type: 'Default' | 'timePicker';
  text?: string;
  button: {
    title: string;
    color: string;
    close: boolean;
  }[];
  closeModal: () => void;
  defaultFunction?: () => void;
}

export function CustomModal({ children, closeModal, type, text, button, defaultFunction }: CustomModalProps) {
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
          {
            type === "Default" ?
              <TextWarn>
                {text}
              </TextWarn> :
              <>
                <ContentText>Mude o horário: </ContentText>
                {children}
              </>
          }
        </Content>
        <Footer>
          {
            button.map((item) => (
              <ButtonModal
                key={item.title}
                color={item.color}
                onPress={item.close ? closeModal : defaultFunction}
              >
                <Title>{item.title}</Title>
              </ButtonModal>
            ))
          }
        </Footer>
      </ContainerPicker>
    </Container>
  );
}