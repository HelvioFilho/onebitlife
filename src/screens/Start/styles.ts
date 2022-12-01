import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const LogoImage = styled(Image)`
  width: 300px;
  height: 60px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 50px 0px;
`;