import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import arrowDown from '../../../assets/icons/arrowDropdown.png';
import {
  Arrow,
  Button,
  ButtonText,
  Container,
  NotificationText,
  TextContainer
} from './styles';
import { Modal, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { CustomModal } from '../../CustomModal';

interface TimeProps {
  frequency: string;
  dayNotification: string;
  timeNotification: string;
  setDayNotification: (value: string) => void;
  setTimeNotification: (value: string) => void;
}

type AndroidMode = 'date' | 'time';


export function TimeDataPicker({
  frequency,
  dayNotification,
  timeNotification,
  setDayNotification,
  setTimeNotification
}: TimeProps) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<AndroidMode>("date");
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("-");
  const [notificationDate, setNotificationDate] = useState("");
  const [notificationTime, setNotificationTime] = useState("");

  const { colors } = useTheme();

  const data = [
    { key: "Domingo", value: "Dom" },
    { key: "Segunda", value: "Seg" },
    { key: "Terça", value: "Ter" },
    { key: "Quarta", value: "Qua" },
    { key: "Quinta", value: "Qui" },
    { key: "Sexta", value: "Sex" },
    { key: "Sábado", value: "Sab" },
  ];

  function onChange(_, selectedDate) {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    const notificationHour = tempDate.getHours().toString().padStart(2, "0");
    const notificationMin = tempDate.getMinutes().toString().padStart(2, "0");

    let dateNotification;

    if (frequency === "Semanal") {
      dateNotification = selected;
    }

    const timeNotification = `${notificationHour}:${notificationMin}`;

    setNotificationDate(dateNotification)
    setNotificationTime(timeNotification);

    if (frequency === "Diário") {
      setDayNotification("Diário");
    } else {
      setDayNotification(dateNotification);
    }
    setTimeNotification(timeNotification);
  }

  function showMode(currentMode: AndroidMode) {
    setShow(true);
    setMode(currentMode)
  }

  useEffect(() => {
    if (dayNotification && timeNotification) {
      setNotificationDate(dayNotification);
      setNotificationTime(timeNotification);
    }
  })

  return (
    <Container>
      {
        frequency === "Semanal" &&
        <SelectList
          data={data}
          search={false}
          setSelected={setSelected}
          onSelect={() => setSelected(selected)}
          placeholder={selected}
          boxStyles={{
            borderWidth: 1,
            borderColor: colors.white,
            paddingHorizontal: 20,
            paddingVertical: 15
          }}
          inputStyles={{ color: colors.white }}
          dropdownStyles={{
            borderWidth: 0,
            maxHeight: 200
          }}
          dropdownItemStyles={{
            borderWidth: 1,
            borderColor: colors.gray,
            borderRadius: 10,
            marginBottom: 15
          }}
          dropdownTextStyles={{ color: colors.gray }}
          arrowicon={
            <Arrow source={arrowDown} />
          }
        />
      }
      <Button
        onPress={() => showMode("time")}
      >
        <ButtonText>Selecione a hora</ButtonText>
      </Button>
      <TextContainer>
        {
          frequency === 'Diário' &&
          <NotificationText>Dia do hábito: Diário</NotificationText>
        }
        <NotificationText>Horário do hábito: {notificationTime}</NotificationText>
      </TextContainer>
      {
        show && Platform.OS === "android" ?
          <DateTimePicker
            testID="DateTimePicker"
            value={date}
            mode={mode}
            shouldRasterizeIOS={true}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
          :
          <Modal
            animationType="fade"
            visible={show}
            transparent={true}
          >
            <CustomModal
              closeModal={() => setShow(false)}
            >
              <DateTimePicker
                testID="DateTimePicker"
                value={date}
                mode={mode}
                shouldRasterizeIOS={true}
                is24Hour={true}
                display="default"
                onChange={onChange}
                themeVariant="dark"
              />
            </CustomModal>
          </Modal>
      }
    </Container>
  );
}