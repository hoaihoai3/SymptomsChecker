import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import HomePage from './components/HomePage';
import HistoryPage from './components/History/HistoryPage';
import SettingsPage from './components/Settings/SettingsPage';
import WelcomePage from './components/Auth/WelcomePage';
import ProfilePage from './components/Profile/ProfilePage';
import EditProfile from './components/Profile/EditProfile';
import AboutUs from './components/Settings/AboutUs';
import UseTerms from './components/Settings/UseTerms';
import AccountPage from './components/Settings/AccountPage';
import SymptomsCheck from './components/Search/SymptomsCheck';


const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="welcome" component={WelcomePage} title="Welcome" />
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
          />
          <Scene key="signup" component={SignUpForm} title='Sign Up' />
        </Scene>
        <Scene key="main">
          <Scene key="home" component={HomePage} initial />
          <Scene
            rightTitle="Edit"
            onRight={() => { Actions.editProfile(); }}
            key="profile"
            component={ProfilePage}
            title="Medical Profile"
          />
          <Scene key="editProfile" component={EditProfile} title="Medical Profile" />
          <Scene key="history" component={HistoryPage} title="Search History" />
          <Scene key="settings" component={SettingsPage} title="Settings" />
          <Scene key="account" component={AccountPage} title="Account Settings" />
          <Scene key="about" component={AboutUs} title="About Us" />
          <Scene key="useTerms" component={UseTerms} title="Terms of Use" />
          <Scene key="check" component={SymptomsCheck} title="Symptom Checker" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
