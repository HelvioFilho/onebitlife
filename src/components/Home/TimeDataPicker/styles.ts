import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  padding: 15px 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextContainer = styled.View`
  margin: 20px 20px;
`;

export const NotificationText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5px;
`;

export const Arrow = styled.Image`
  width: 20px;
  height: 20px;
`;