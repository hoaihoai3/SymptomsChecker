import firebase from 'firebase';
import 'firebase/firestore';
import { Actions } from 'react-native-router-flux';
import {
  // PROFILE_EDIT,
  PROFILE_FETCH_SUCCESS,
  PROFILE_SAVE_SUCCESS,
  PROFILE_UPDATE
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

  export const profileUpdate = ({ prop, value }) => {
     return {
       type: PROFILE_UPDATE,
       payload: { prop, value }
     };
   };

  export const profileSave = ({ name, age, gender, height, weight, bloodGroup, bloodGlucose,
                                bloodPressure, allergies, medication, history }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.firestore().collection('MedicalProfile').doc(currentUser.uid)
        .update({ name, age, gender, height, weight, bloodGroup, bloodGlucose, bloodPressure, allergies, medication, history })
        .then(() => {
          dispatch({ type: PROFILE_SAVE_SUCCESS, });
          Actions.pop();
        });
    };
  };
