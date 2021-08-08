import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import styles from './src/theme/appTheme';

const App = () => (
  <SafeAreaView style={ styles.fondo }>
    <StatusBar 
      backgroundColor="black"
      barStyle='light-content'
    />
    <HomeScreen />
  </SafeAreaView>
)

export default App;