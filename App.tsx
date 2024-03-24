import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Main Navigator
import AppNavigator from './src/navigations/AppNavigator';

// redux
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
