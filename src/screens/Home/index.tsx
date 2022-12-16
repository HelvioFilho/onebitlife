import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { CreateHabit } from '../../components/Home/CreateHabit';
import { EditHabit } from '../../components/Home/EditHabit';
import { StatusBar } from '../../components/Home/StatusBar';
import { LifeStatus } from '../../components/LifeStatus';
import ChangeNavigation from '../../services/ChangeNavigation';

import { Container, DailyChecks, ExplanationText, Wrapper } from './styles';

export interface HabitProps {
  name: string;
  check: boolean;
  area: string;
  lastCheck?: string;
  isChecked?: number;
  frequency: string;
  notification?: number;
}

export function Home() {
  const [mindHabit, setMindHabit] = useState({} as HabitProps);
  const [moneyHabit, setMoneyHabit] = useState({} as HabitProps);
  const [bodyHabit, setBodyHabit] = useState({} as HabitProps);
  const [funHabit, setFunHabit] = useState({} as HabitProps);
  const [robotDaysLife, setRobotDaysLife] = useState('');

  const { navigate } = useNavigation();
  const { checkShowHome } = ChangeNavigation;
  const { colors } = useTheme();
  const { params } = useRoute();
  const today = new Date();

  useEffect(()=> {
    checkShowHome(1)
    .then((data) => {
      const startDate = new Date(data.appStartData);
      const checkDays = today.getTime() - startDate.getTime();
      setRobotDaysLife(Math.trunc(checkDays/(1000 * 60 * 60 *24)+1).toString().padStart(2, "0"));
    })
    .catch((error) => console.log(error));
  },[params]);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <DailyChecks>
            ❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✓ 80 checks
          </DailyChecks>
          <LifeStatus />
          <StatusBar />
          {
            Object.keys(mindHabit).length > 0 ?
              <EditHabit
                habit={mindHabit}
                checkColor={colors.mind}
              /> :
              <CreateHabit
                habitArea="Mente"
                borderColor={colors.mind}
              />
          }
          {
            Object.keys(moneyHabit).length > 0 ?
              <EditHabit
                habit={moneyHabit}
                checkColor={colors.money}
              /> :
              <CreateHabit
                habitArea="Financeiro"
                borderColor={colors.money}
              />
          }
          {
            Object.keys(bodyHabit).length > 0 ?
              <EditHabit
                habit={bodyHabit}
                checkColor={colors.body}
              /> :
              <CreateHabit
                habitArea="Corpo"
                borderColor={colors.body}
              />
          }
          {
            Object.keys(funHabit).length > 0 ?
              <EditHabit
                habit={funHabit}
                checkColor={colors.fun}
              /> :
              <CreateHabit
                habitArea="Humor"
                borderColor={colors.fun}
              />
          }
        </Wrapper>
        <ExplanationText
          onPress={() => navigate('explanation')}
        >
          ver explicações novamente
        </ExplanationText>

      </ScrollView>
    </Container>
  );
}