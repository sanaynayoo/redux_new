import React from 'react';
import {View, Text} from 'react-native';

// created stack
import {AppStack} from '../createStack';

// screens
import HomeScreen from '../../screens/home/Home';

const Home_stack_navigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default Home_stack_navigator;
