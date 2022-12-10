import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 20;
`;

export const UpdateButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  width: 150px;
  height: 50px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const UpdateButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

export const TrashButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.body};
`;

export const TrashIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;