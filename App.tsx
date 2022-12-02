import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/assets/styles/theme';
import { Routes } from './src/routes';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
      />
      <Routes />
    </ThemeProvider>
  );
}

