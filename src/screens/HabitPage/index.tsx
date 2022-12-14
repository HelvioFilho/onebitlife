import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Modal, ScrollView } from 'react-native';

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
import { CustomModal } from '../../components/CustomModal';
import { useTheme } from 'styled-components';

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
  const [textWarn, setTextWarn] = useState('');
  const [show, setShow] = useState(false);

  const { goBack, navigate } = useNavigation();
  const { colors } = useTheme();
  const { params } = useRoute();
  const { create, habit } = params as RouteParams;

  function handleCreateHabit() {
    if (!habitInput || !frequencyInput) {
      setShow(true);
      setTextWarn("Você precisa selecionar um hábito e frequência para continuar");
    } else if (notification && frequencyInput === "Diário" && !timeNotification) {
      setShow(true);
      setTextWarn("Você precisa dizer a frequência e o horário da notificação");
    } else {
      console.log("vai para navegação");
      // navigate("home", {
      //   createHabit: `Created in ${habit.habitArea}`
      // });
    }
  }

  function handleUpdateHabit() {
    if (notification && !dayNotification && !timeNotification) {
      setShow(true);
      setTextWarn("Você precisa colocar a frequência e o horário da notificação");
    } else {
      setShow(true);
      setTextWarn("update realizado com sucesso!");
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
        <Modal
          animationType="fade"
          visible={show}
          transparent={true}
        >
          <CustomModal
            type="Default"
            closeModal={() => setShow(false)}
            text={textWarn}
            button={[
              {
                title: "Confirmar",
                color: colors.success,
                close: true,
              }
            ]}
          />
        </Modal>
      </ScrollView>
    </Container>
  );
}