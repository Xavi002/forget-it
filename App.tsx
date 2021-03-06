import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { AppLoading } from 'expo'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'

import AppStack from './src/routes/AppStack'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <AppStack />
      <StatusBar style="light" backgroundColor="#000" />
    </>
  )
}

export default App
