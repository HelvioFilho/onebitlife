import { useNavigation } from '@react-navigation/native';
import React from 'react';
import iconTrash from '../../../assets/icons/trash.png';
import { Container, TrashButton, TrashIcon, UpdateButton, UpdateButtonText } from './styles';

interface UpdateProps {
  habitInput: string;
  handleUpdate: () => void;
  habitArea: string;
}

export function UpdateExcludeButtons({ habitInput, handleUpdate, habitArea }: UpdateProps) {
  
  const {navigate} = useNavigation();

  function handleDeleteHabit(){
    navigate("home", {
      excludeArea: habitArea
    });
  }

  return (
    <Container>
      <UpdateButton
        activeOpacity={0.8}
        onPress={() => { }}
      >
        <UpdateButtonText>Atualizar</UpdateButtonText>
      </UpdateButton>
      <TrashButton
        activeOpacity={0.8}
        onPress={() => { }}
      >
        <TrashIcon
          source={iconTrash}
        />
      </TrashButton>
    </Container>
  );
}