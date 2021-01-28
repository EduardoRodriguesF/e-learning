import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import Course from '../pages/Course';
import Lesson from '../pages/Lesson';

const Auth = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6548A3' }
    }}
  >
    <Auth.Screen name="Dashboard" component={TabRoutes} />
    <Auth.Screen name="Course" component={Course} />
    <Auth.Screen name="Lesson" component={Lesson} />    
  </Auth.Navigator>
);

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        const icons = {
          Dashboard: 'home',
          Favorites: 'heart',
        };

        return (
          <Icon
            name={icons[route.name]}
            color={color}
            size={20}
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FF6680',
      inactiveTintColor: '#C4C4D1',
      labelPosition: 'beside-icon',
      style: { 
        height: 65, 
      },
      labelStyle: {
        fontSize: 15,
      },
    }}
  >
    <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Home' }} />
    <Tab.Screen name="Favorites" component={Favorites} options={{ title: 'Salvos' }} />
  </Tab.Navigator>
)

export { Routes, TabRoutes };