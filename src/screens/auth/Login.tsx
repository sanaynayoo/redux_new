import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// responsive styles
import {
  screen_resHeight,
  screen_resWidth,
} from '../../utils/defaulScreenResponse';

// react context

import {ReactContext} from '../../context/Context';

const Login = () => {
  const {auth, authActionState} = useContext<any>(ReactContext);

  return (
    <View style={styles.container}>
      <Text>Login status :{auth}</Text>

      <TouchableOpacity
        style={styles.buttonActions}
        onPress={() => {
          console.log('is change ::');
          authActionState(!auth);
        }}>
        <Text>Change Auth Action</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActions: {
    width: screen_resWidth(80),
    backgroundColor: '#ff8800',
    paddingHorizontal: screen_resWidth(5),
    paddingVertical: screen_resHeight(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
