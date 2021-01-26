import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6548A3" translucent />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#6548A3'}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;