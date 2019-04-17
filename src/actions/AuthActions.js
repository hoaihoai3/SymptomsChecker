import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         CONFIRM_PASS_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         SIGNUP_USER,
         SIGNUP_FAIL,
         UNMATCHED_PASSWORD,
         GO_TO_LOGIN,
         GO_TO_SIGNUP
       } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const goToLogIn = () => {
  Actions.login();
  return {
    type: GO_TO_LOGIN
  };
};

export const goToSignUp = () => {
  Actions.signup();
  return {
    type: GO_TO_SIGNUP
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASS_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => logInUserSuccess(dispatch, user))
      .catch(() => logInUserFail(dispatch));
  };
};

const logInUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const signUpFail = (dispatch) => {
  dispatch({
    type: SIGNUP_FAIL
  });
};

const logInUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const signUpUser = ({ email, password, confirmPassword }) => {
  if (password === confirmPassword) {
    return (dispatch) => {
      dispatch({ type: SIGNUP_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => logInUserSuccess(dispatch, user))
            .catch(() => logInUserFail(dispatch));
        })
        .catch(() => signUpFail(dispatch));
      };
  }
  return (dispatch) => {
    dispatch({ type: UNMATCHED_PASSWORD });
  };
};
