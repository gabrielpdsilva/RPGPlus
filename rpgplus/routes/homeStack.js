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