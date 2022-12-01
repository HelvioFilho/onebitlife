import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import Logo from '../../assets/icons/logo3.png';
import { DefaultButton } from '../../components/DefaultButton';
import { LifeStatus } from '../../components/LifeStatus';
import { Container, Description, LogoImage, Wrapper } from './styles';

export function Start() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScrollView 
        
      showsVerticalScrollIndicator={false}>
        <Wrapper>
          <LogoImage
            source={Logo}
          />
          <LifeStatus />
          <Description>
            Vamos transformar sua vida {"\n"}
            em um jogo, buscando sempre {"\n"}
            o melhor nível.
          </Description>
          <DefaultButton 
            title="Continuar"
            handlePress={() => navigate('explanation')}
            style={{width: 250, height: 50}}
          />
        </Wrapper>
      </ScrollView>
    </Container>
  );
}