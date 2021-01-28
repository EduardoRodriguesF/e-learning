import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes, TabRoutes } from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6548A3" translucent />
      <View style={{ flex: 1, backgroundColor: '#6548A3'}}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App;