/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import FetchDemoPage from './js/FetchDemoPage';
import LoginPage from './js/page/LoginPage';
import {name as appName} from './app.json';
import AppNavigators from './js/navigator/AppNavigators';

AppRegistry.registerComponent(appName, () => AppNavigators);
