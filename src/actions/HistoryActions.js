import firebase from 'firebase';
import 'firebase/firestore';
import {
  HISTORY_FETCH_SUCCESS
} from './types';

 export const historyFetch = () => {
    const { currentUser } = firebase.auth();
    const historyTempList = [];
    return (dispatch) => {
      firebase.firestore()
      .collection('Users').doc(currentUser.uid).collection('historyList')
      .orderBy('time', 'desc')
      .limit(5)
      .get()
      .then((querySnapshot) => querySnapshot.forEach((doc) =>
      historyTempList.push(doc.data())
    ));
    dispatch({ type: HISTORY_FETCH_SUCCESS, payload: historyTempList });
    };
  };
