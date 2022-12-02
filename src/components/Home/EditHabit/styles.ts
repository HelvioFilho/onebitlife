import styled from 'styled-components/native';

interface CheckProps {
  checkColor: string;
}

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 320px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Frequency = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export const Check = styled.TouchableOpacity<CheckProps>`
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ checkColor }) => checkColor};
`;

export const Checked = styled.Image`
  width: 25px;
  height: 25px;
`;