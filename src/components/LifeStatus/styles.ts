import styled from 'styled-components/native';
import LottieView from "lottie-react-native";
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const {width: displayWidth} = Dimensions.get('window');

export const Container = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0px ${RFValue(50)}px;
`;

export const Education = styled(LottieView)`
  width: 100px;
`;

export const Money = styled(LottieView)`
  width: 100px;
`;
export const WrapperRobot = styled.View`
  position: absolute;
  width: ${displayWidth}px;
  z-index: 99;
  align-items: center;
`;

export const Robot = styled(LottieView)`
  width: 190px;
`;