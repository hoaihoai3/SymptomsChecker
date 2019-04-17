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
 } from '../actions/types';

const INITIAL_STATE = {
   email: '',
   password: '',
   confirmPassword: '',
   user: null,
   error: '',
   loading: false
 };

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case CONFIRM_PASS_CHANGED:
      return { ...state, confirmPassword: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER:
      return { ...state, ...INITIAL_STATE, loading: true };
    case SIGNUP_FAIL:
      return { ...state, error: 'Create account failed', loading: false };
    case UNMATCHED_PASSWORD:
      return { ...state, error: 'Password and Confirm Password do not match', loading: false };
    case GO_TO_LOGIN:
      return { ...state, ...INITIAL_STATE };
    case GO_TO_SIGNUP:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
