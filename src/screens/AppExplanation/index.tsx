import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { DefaultButton } from '../../components/DefaultButton';
import ChangeNavigation from '../../services/ChangeNavigation';

import { Container, Description, SubTitle, Title, Wrapper } from './styles';

export function AppExplanation() {
  const { navigate } = useNavigation();
  const [isShowHome, setIsShowHome] = useState(false);
  const { setShowHome } = ChangeNavigation;
  const startDate = new Date();
  const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;

  function handleSetShowHome(){
    if(!isShowHome){
      setShowHome({showHome: "true", appStartData})
      .then(() => console.log(`Sucesso: ${isShowHome} ${appStartData}`))
      .catch((error) => console.log(error));
    }
    setIsShowHome(true);
    navigate('home')
  }
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
            handlePress={handleSetShowHome}
            style={{ width: 250, height: 50 }}
          />
        </Wrapper>
      </ScrollView>
    </Container>
  );
}