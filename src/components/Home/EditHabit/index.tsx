import React, { useEffect, useState } from 'react';
import { ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import educationIcon from '../../../assets/icons/educationIcon.png';
import moneyIcon from '../../../assets/icons/moneyIcon.png';
import bodyIcon from '../../../assets/icons/bodyIcon.png';
import funIcon from '../../../assets/icons/funIcon.png';
import { Check, Checked, Container, Frequency, Title } from './styles';

interface HabitProps {
  name: string;
  check: boolean;
  area: string;
  lastCheck?: string;
  isChecked?: number;
  frequency: string;
  notification?: number;
}

interface EditHabitProps {
  habit: HabitProps;
  checkColor: string;
}

export function EditHabit({ habit, checkColor }: EditHabitProps) {
  const [habitCheck, setHabitCheck] = useState(false);
  const [image, setImage] = useState(educationIcon);

  const notification = habit.notification === null ?
    `Sem notificações - ${habit.frequency}` :
    `${habit.notification} - ${habit.frequency}`;

  function handleCheck() {
    if (habitCheck) return;
    setHabitCheck(true);
  }

  useEffect(() => {
    setHabitCheck(habit.check);
    switch (habit.area) {
      case 'Financeiro':
        setImage(moneyIcon);
        break;
      case 'Corpo':
        setImage(bodyIcon);
        break;
      case 'Humor':
        setImage(funIcon);
    }
  }, []);
  return (
    <Container
      activeOpacity={0.8}
      onPress={() => { }}
    >
      <View>
        <Title>{habit.name}</Title>
        <Frequency>{notification}</Frequency>
      </View>
      {
        habitCheck ?
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleCheck}
          >
            <Checked source={image} />
          </TouchableOpacity> :
          <Check
            activeOpacity={0.8}
            onPress={handleCheck}
            checkColor={checkColor}
          />
      }
    </Container>
  );
}