
import React from 'react';
import { useTheme } from 'styled-components';
import educationIcon from '../../assets/icons/educationIcon.png';
import moneyIcon from '../../assets/icons/moneyIcon.png';
import bodyIcon from '../../assets/icons/bodyIcon.png';
import funIcon from '../../assets/icons/funIcon.png';

import { Container, Description, Icon, Span, Title, Wrapper } from './styles';

export function Card() {
  const { colors } = useTheme();
  return (
    <Container>
      <Title>
        Através deste App você vai consolidar
        4 hábitos de áreas fundamentais:
      </Title>
      <Wrapper>
        <Icon
          source={educationIcon}
        />
        <Description>
          <Span color={colors.mind}>Mente: </Span>
          Hábitos para melhorar sua inteligência/sabedoria
        </Description>
      </Wrapper>
      <Wrapper>
        <Icon
          source={moneyIcon}
        />
        <Description>
          <Span color={colors.money}>Financeiro: </Span>
          Hábitos para te ajudar com o controle financeiro
        </Description>
      </Wrapper>
      <Wrapper>
        <Icon
          source={bodyIcon}
        />
        <Description>
          <Span color={colors.body}>Corpo: </Span>
          Hábitos para te deixar mais saudável e forte.
        </Description>
      </Wrapper>
      <Wrapper>
        <Icon
          source={funIcon}
        />
        <Description>
          <Span color={colors.fun}>Humor: </Span>
          Hábitos para controlar o stress e aumenta a felicidade
        </Description>
      </Wrapper>
    </Container>
  );
}