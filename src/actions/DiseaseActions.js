import firebase from 'firebase';
import 'firebase/firestore';
import {
  DISEASE_FETCH_SUCCESS
} from './types';

 export const diseaseFetch = (diseaseId) => {
    return (dispatch) => {
      firebase.firestore()
      .collection('Disease').doc(diseaseId)
      .get()
      .then(doc => {
        dispatch({ type: DISEASE_FETCH_SUCCESS, payload: doc.data() });
      });
    };
  };
