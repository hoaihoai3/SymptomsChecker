import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import HistoryPage from './components/HistoryPage';
import SettingsPage from './components/SettingsPage';
import WelcomePage from './components/WelcomePage';

const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="welcome" component={WelcomePage} title="Welcome" initial />
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
          />
          <Scene key="signup" component={SignUpForm} title='Sign Up' />
        </Scene>
        <Scene key="main">
          <Scene key="home" component={HomePage} initial />
          <Scene key="profile" component={ProfilePage} title="Medical Profile" />
          <Scene key="settings" component={SettingsPage} title="Settings" />
          <Scene key="history" component={HistoryPage} title="Search History" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
