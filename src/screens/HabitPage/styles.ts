import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BackPage = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 25px;
`;

export const ArrowBack = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Wrapper = styled.View`
  width: 250px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const InputText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 35px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const InputContainer = styled.View`
  border-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-radius: 10px;
  padding: 15px 20px;
`;

export const Area = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CreateButton = styled.View`
  align-items: center;
`;