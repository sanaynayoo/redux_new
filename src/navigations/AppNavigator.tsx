import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Stacks
import AuthStackNavigator from './stack/Auth_stack_navigator';
import TabsStackNavigator from './tabs/ButtonTabs';

// React Context
import {ReactContext} from '../context/Context';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);

  const context: any = {
    auth,
    authActionState: (value: boolean) => {
      setAuth(value);
    },
  };

  return (
    <ReactContext.Provider value={context}>
      <NavigationContainer>
        {auth ? <TabsStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
};

export default AppNavigator;
