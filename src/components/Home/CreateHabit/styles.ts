import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  borderColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: 315px;
  margin: 10px 0px;
  padding: 10px 20px;
  border-width: 2px;
  border-style: dotted;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;