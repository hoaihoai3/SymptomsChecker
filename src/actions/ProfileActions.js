import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_EDIT,
  PROFILE_FETCH_SUCCESS
} from './types';

 export const profileFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.firestore().collection('MedicalProfile').doc(currentUser.uid).get()
        .then(doc => {
          dispatch({ type: PROFILE_FETCH_SUCCESS, payload: doc.data() });
        });
    };
  };
