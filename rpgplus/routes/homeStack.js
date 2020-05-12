import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SketchScreen from '../screens/SketchScreen';
import NameGeneratorScreen from '../screens/NameGeneratorScreen';

const screens = {
    
    Home: {
        screen: HomeScreen
    },
    NameGenerator: {
        screen: NameGeneratorScreen
    },
    Sketch: {
        screen: SketchScreen
    },
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);

/*

import Detail from '../screens/Detail'

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{ title: 'Detail Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1
*/