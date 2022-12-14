import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import arrowBack from '../../assets/icons/arrowBack.png';
import { DefaultButton } from '../../components/DefaultButton';
import { Notification } from '../../components/Home/Notification';
import { SelectHabit } from '../../components/Home/SelectHabit';
import { TimeDataPicker } from '../../components/Home/TimeDataPicker';
import { UpdateExcludeButtons } from '../../components/Home/UpdateExcludeButtons';

import {
  Area,
  ArrowBack,
  BackPage,
  Container,
  CreateButton,
  InputContainer,
  InputText,
  Title,
  Wrapper
} from './styles';

interface RouteParams {
  create: boolean;
  habit: {
    habitArea: string;
  };
}

export function HabitPage() {
  const [habitInput, setHabitInput] = useState('');
  const [frequencyInput, setFrequencyInput] = useState('');
  const [notification, setNotification] = useState(false);
  const [dayNotification, setDayNotification] = useState('');
  const [timeNotification, setTimeNotification] = useState('');

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const { habit } = params as RouteParams;
  const create = false;

  function handleCreateHabit() {
    if (!habitInput || !frequencyInput) {
      console.log("Você precisa selecionar um hábito e frequência para continuar");
    } else if (notification && frequencyInput === "Diário" && !timeNotification) {
      console.log("Você precisa dizer a frequência e o horário da notificação");
    } else {
      console.log("vai para navegação");
      // navigate("home", {
      //   createHabit: `Created in ${habit.habitArea}`
      // });
    }
  }

  function handleUpdateHabit() {
    if (notification && !dayNotification && !timeNotification) {
      console.log("Você precisa colocar a frequência e o horário da notificação");
    } else {
      console.log("update realizado com sucesso!");
      // navigate("home", {
      //   updatedHabit: `Updated in ${habit.habitArea}`
      // });
    }
  }

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
          <SelectHabit
            habit="Frequency"
            habitInput={setFrequencyInput}
          />
          {
            frequencyInput === 'Mensal' ?
              null :
              <Notification
                notification={notification}
                notificationToggle={setNotification}
              />
          }
          {
            notification && frequencyInput !== "Mensal" &&
            <TimeDataPicker
              frequency={frequencyInput}
              dayNotification={dayNotification}
              timeNotification={timeNotification}
              setDayNotification={setDayNotification}
              setTimeNotification={setTimeNotification}
            />
          }
          {
            create ?
              <CreateButton>
                <DefaultButton
                  title="Criar"
                  style={{ width: 250, height: 50 }}
                  handlePress={handleCreateHabit}
                />
              </CreateButton> :
              <UpdateExcludeButtons
                handleUpdate={handleUpdateHabit}
                habitArea={habit.habitArea}
                habitInput={habitInput}
              />
          }
        </Wrapper>
      </ScrollView>
    </Container>
  );
}