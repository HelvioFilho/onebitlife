import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 40px 0px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 30px;
`;