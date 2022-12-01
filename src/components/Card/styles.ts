import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface SpanProps {
  color: string;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  width: 350px;
  border-radius: 25px;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  padding-right: 40px;
`;

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Span = styled.Text<SpanProps>`
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;