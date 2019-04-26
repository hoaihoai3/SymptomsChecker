import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import HistoryReducer from './HistoryReducer';

export default combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  history: HistoryReducer
});
