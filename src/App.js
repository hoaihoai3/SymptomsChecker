import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAsoGSE6jisMEVawlpGCsmrd93gHCgOKmI',
      authDomain: 'symptoms-checker-a898b.firebaseapp.com',
      databaseURL: 'https://symptoms-checker-a898b.firebaseio.com',
      projectId: 'symptoms-checker-a898b',
      storageBucket: 'symptoms-checker-a898b.appspot.com',
      messagingSenderId: '183194827166'

    };
  firebase.initializeApp(config);
  }

  render() {
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
        </Provider>

      );
    }
  }

export default App;
