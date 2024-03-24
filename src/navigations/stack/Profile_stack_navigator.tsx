import React from 'react';
import {View, Text} from 'react-native';

// created stack
import {AppStack} from '../createStack';

// screens
import ProfileScreen from '../../screens/profile/Profile';

const Profile_stack_navigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  );
};

export default Profile_stack_navigator;
