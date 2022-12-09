import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modal};
`;

export const ContainerPicker = styled.View`
  width: 90%;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 15px;
`;

export const Close = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
`;

export const IconX = styled(Ionicons)``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const ContentText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  width: 90%;
  height: 50px;
  padding: 20px 30px;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonModal = styled.TouchableOpacity<ButtonProps>`
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;