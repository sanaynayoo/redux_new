import React from 'react';
import {View, Text} from 'react-native';

// created stack
import {AppStack} from '../createStack';

//screens
import InfoScrens from '../../screens/info/Info';

const Info_stack_navigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Information" component={InfoScrens} />
    </AppStack.Navigator>
  );
};

export default Info_stack_navigator;
