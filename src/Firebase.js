import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAsoGSE6jisMEVawlpGCsmrd93gHCgOKmI',
  authDomain: 'symptoms-checker-a898b.firebaseapp.com',
  databaseURL: 'https://symptoms-checker-a898b.firebaseio.com',
  projectId: 'symptoms-checker-a898b',
  storageBucket: 'symptoms-checker-a898b.appspot.com',
  messagingSenderId: '183194827166'
};
const Firebase = firebase.initializeApp(config);

export default Firebase;
