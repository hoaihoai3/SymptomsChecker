/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
// import SymptomsCheck from './src/components/SymptomsCheck';

import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => SymptomsCheck);
