import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { DefaultButton } from '../../components/DefaultButton';

import { Container, Description, SubTitle, Title, Wrapper } from './styles';

export function AppExplanation(){
  const { navigate } = useNavigation();
  return (
    <Container>
      <ScrollView 
      showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Title>Antes, deixa {"\n"} eu te explicar...</Title>
          <Card />
          <SubTitle>Pronto(a) para subir de nível na vida?</SubTitle>
          <Description>
            Na próxima tela você vai poder escolher {"\n"}
            seus 4 hábitos de forma individual.
          </Description>
          <DefaultButton 
            title="Continuar"
            handlePress={() => navigate('home')}
            style={{width: 250, height: 50}}
          />
        </Wrapper>
      </ScrollView>
    </Container>
  );
}