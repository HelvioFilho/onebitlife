import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface NotificationProps {
  notification: boolean;
  notificationToggle: (notification: boolean) => void;
}

export function Notification({notification, notificationToggle}: NotificationProps){
  const {colors} = useTheme();

  return (
    <Container>
      <Title>Notificação</Title>
      <Switch 
        trackColor={{false: colors.danger, true: colors.success}}
        thumbColor={colors.white}
        ios_backgroundColor={colors.ios}
        onValueChange={() => notificationToggle(!notification)}
        value={notification}
      />
    </Container>
  );
}