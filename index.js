/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
// import App from './src/App';
import BackendFunctions from './src/BackendFunctions';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => BackendFunctions);
// AppRegistry.registerComponent(appName, () => App);
