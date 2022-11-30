import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`;