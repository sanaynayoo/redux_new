import React from 'react';
import {View, Text} from 'react-native';

// stacks
import {AppStack} from '../createStack';

// screens
import LoginScreen from '../../screens/auth/Login';

const Auth_stack_navigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
  );
};

export default Auth_stack_navigator;
