import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import HistoryReducer from './HistoryReducer';
import DiseaseReducer from './DiseaseReducer';

export default combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  history: HistoryReducer,
  disease: DiseaseReducer
});
