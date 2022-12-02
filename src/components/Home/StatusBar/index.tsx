import React from 'react';
import educationIcon from '../../../assets/icons/educationIcon.png';
import moneyIcon from '../../../assets/icons/moneyIcon.png';
import bodyIcon from '../../../assets/icons/bodyIcon.png';
import funIcon from '../../../assets/icons/funIcon.png';
import { Container, Icon, Progress, StatusBarContainer } from './styles';
import { useTheme } from 'styled-components';

export function StatusBar() {
  const { colors } = useTheme();
  return (
    <Container>
      <StatusBarContainer>
        <Icon
          source={educationIcon}
        />
        <Progress
          progress={0}
          color={colors.mind}
        />
      </StatusBarContainer>
      <StatusBarContainer>
        <Icon
          source={moneyIcon}
        />
        <Progress
          progress={0}
          color={colors.money}
        />
      </StatusBarContainer>
      <StatusBarContainer>
        <Icon
          source={bodyIcon}
        />
        <Progress
          progress={0}
          color={colors.body}
        />
      </StatusBarContainer>
      <StatusBarContainer>
        <Icon
          source={funIcon}
        />
        <Progress
          progress={.4}
          color={colors.fun}
        />
      </StatusBarContainer>
    </Container>
  );
}