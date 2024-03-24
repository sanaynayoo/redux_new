import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

// create tabs
const Tab = createMaterialBottomTabNavigator();

// stacks
import HomeStack from '../stack/Home_stack_navigator';
import InfoStack from '../stack/Info_stack_navigator';
import ProfileStack from '../stack/Profile_stack_navigator';

const TabButton = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor="#ff8800"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icons name="home-account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="InfoTab"
        component={InfoStack}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabButton;
