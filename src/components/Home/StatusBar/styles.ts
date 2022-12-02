import { ProgressBar } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StatusBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 6px 0px;
`;

export const Progress = styled(ProgressBar)`
  width: 250px;
  height: 8px;
  border-radius: 10px;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;