/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WelcomeScreen from '~/screens/WelcomeScreen';

AppRegistry.registerComponent(appName, () => () => <WelcomeScreen/>);
