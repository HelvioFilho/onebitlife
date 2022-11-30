import React from 'react';
import { Container, Education, Money, Robot, WrapperRobot } from './styles';

import educationAnimated from "../../assets/education/education-100.json";
import moneyAnimated from "../../assets/money/money-100.json";
import robotAnimated from "../../assets/robot/robot-100-100.json";

export function LifeStatus() {
  return (
    <Container>
      <Education
        source={educationAnimated}
        autoPlay
        loop
      />
      <WrapperRobot>
        <Robot
          source={robotAnimated}
          autoPlay
          loop
        />
      </WrapperRobot>
      <Money
        source={moneyAnimated}
        autoPlay
        loop
      />
    </Container>
  );
}