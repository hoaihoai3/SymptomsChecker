import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';
import {
  // PROFILE_EDIT,
  HISTORY_FETCH_SUCCESS
} from './types';

 export const profileFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.firestore()
      .collection('MedicalProfile').doc(currentUser.uid).collection('historyList')
      .get()
      .then((querySnapshot) => querySnapshot.forEach((doc) =>
      dispatch({ type: HISTORY_FETCH_SUCCESS, payload: doc.data() })
    ));
    };
  };
