import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, Title } from './styles';

interface CreateHabitProps {
  habitArea: string;
  borderColor: string;
}

export function CreateHabit({ habitArea, borderColor }: CreateHabitProps) {
  const { navigate } = useNavigation();

  function handleCreate() {
    navigate("habitPage", {
      create: true,
      habit: {
        habitArea,
      }
    });
  }

  return (
    <Container
      activeOpacity={0.8}
      borderColor={borderColor}
      onPress={handleCreate}
    >
      <Title>
        Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Title>
    </Container>
  );
}