import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import arrowBack from '../../assets/icons/arrowBack.png';
import { DefaultButton } from '../../components/DefaultButton';
import { SelectHabit } from '../../components/Home/SelectHabit';
import { HabitProps } from '../Home';

import {
  Container,
  BackPage,
  ArrowBack,
  Wrapper,
  Title,
  InputText,
  InputContainer,
  Area,
  CreateButton,
} from './styles';

interface RouteParams {
  create: boolean;
  habit: {
    habitArea: string;
  };
}

export function HabitPage() {
  const [habitInput, setHabitInput] = useState('');

  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { create, habit } = params as RouteParams;

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <BackPage
          onPress={() => goBack()}
        >
          <ArrowBack
            source={arrowBack}
          />
        </BackPage>
        <Wrapper>
          <Title>Configurações {"\n"} de hábito</Title>
          <InputText>Área</InputText>
          <InputContainer>
            <Area>{habit.habitArea}</Area>
          </InputContainer>
          <InputText>Hábito</InputText>
          <SelectHabit
            habit={habit.habitArea}
            habitInput={setHabitInput}
          />
          <InputText>Frequência</InputText>
          {/* selectFrequency */}

          {
            create ?
              <CreateButton>
                <DefaultButton
                  title="Criar"
                  style={{ width: 250, height: 50 }}
                  handlePress={() => { }}
                />
              </CreateButton> :
              <></>
          }
        </Wrapper>
      </ScrollView>
    </Container>
  );
}