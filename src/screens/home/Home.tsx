import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// stores
import {RootState} from '../../store/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../store/reducers/counterSlice';
import {
  screen_resHeight,
  screen_resWidth,
} from '../../utils/defaulScreenResponse';

const Home = () => {
  const [amount, setAmount] = useState<any>(1000);

  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const uploadAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home counter {counter}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={[styles.btnContaienr, {backgroundColor: '#ff8899'}]}>
          <Text style={{color: '#fff'}}>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={styles.btnContaienr}>
          <Text style={{color: '#fff'}}>Increment</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Please Enter Amount"
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      <TouchableOpacity onPress={uploadAmount} style={styles.btnContaienr}>
        <Text style={{color: '#fff'}}>Add Amount</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
  },
  buttonContainer: {
    width: screen_resWidth(80),
    marginTop: screen_resHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnContaienr: {
    backgroundColor: '#ff8800',
    paddingHorizontal: screen_resWidth(10),
    paddingVertical: screen_resHeight(2),
    borderRadius: screen_resWidth(2),
  },
});
