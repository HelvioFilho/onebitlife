import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useTheme } from 'styled-components';
import iconTrash from '../../../assets/icons/trash.png';
import { CustomModal } from '../../CustomModal';
import { Container, TrashButton, TrashIcon, UpdateButton, UpdateButtonText } from './styles';

interface UpdateProps {
  habitInput: string;
  handleUpdate: () => void;
  habitArea: string;
}

interface SettingProps {
  title: string;
  button: {
    title: string;
    color: string;
    close: boolean;
  }[];
  function: () => void;
}

export function UpdateExcludeButtons({ habitInput, handleUpdate, habitArea }: UpdateProps) {
  const [show, setShow] = useState(false);
  const [setting, setSetting] = useState({} as SettingProps);
  const { navigate } = useNavigation();

  const { colors } = useTheme();

  function handleDeleteHabit() {
    setShow(false);
    navigate("home", {
      excludeArea: habitArea
    });
  }

  return (
    <Container>
      <UpdateButton
        activeOpacity={0.8}
        onPress={() => {
          setSetting({
            title: "Ao prosseguir você vai atualizar o hábito, tem certeza? Ao fazer isso você pode mudar o hábito, frequência e notificação.",
            button: [
              {
                title: "Voltar",
                color: colors.danger,
                close: true,
              },
              {
                title: "Atualizar",
                color: colors.success,
                close: false,
              }
            ],
            function: () => {
              setShow(false);
              handleUpdate();
            }
          });
          setShow(true);
        }}
      >
        <UpdateButtonText>Atualizar</UpdateButtonText>
      </UpdateButton>
      <TrashButton
        activeOpacity={0.8}
        onPress={() => {
          setSetting({
            title: "Você tem certeza que quer excluir o hábito? Ao fazer isso perderá todo o progresso ou falha do hábito.",
            button: [
              {
                title: "Voltar",
                color: colors.success,
                close: true,
              },
              {
                title: "Excluir",
                color: colors.danger,
                close: false,
              }
            ],
            function: handleDeleteHabit
          });
          setShow(true);
        }}
      >
        <TrashIcon
          source={iconTrash}
        />
      </TrashButton>
      <Modal
        animationType="fade"
        visible={show}
        transparent={true}
      >
        <CustomModal
          type="Default"
          closeModal={() => setShow(false)}
          text={setting.title}
          button={setting.button}
          defaultFunction={setting.function}
        />
      </Modal>
    </Container>
  );
}