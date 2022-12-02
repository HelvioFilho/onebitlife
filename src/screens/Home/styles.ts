import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const DailyChecks = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 40px;
`;

export const ExplanationText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 15px;
  padding-bottom: 25px;
`;