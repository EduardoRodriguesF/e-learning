import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Course from '../pages/Course';
import Lesson from '../pages/Lesson';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6548A3' }
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Course" component={Course} />
    <Auth.Screen name="Lesson" component={Lesson} />    
  </Auth.Navigator>
);

export default Routes;