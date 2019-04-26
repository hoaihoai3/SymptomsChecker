import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_UPDATE,
  PROFILE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  bloodGroup: '',
  bloodGlucose: '',
  bloodPressure: '',
  allergies: [],
  medication: [],
  history: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      console.log(action.payload);
      return {
         ...state,
        name: action.payload.name,
        age: action.payload.age,
        gender: action.payload.gender,
        height: action.payload.height,
        weight: action.payload.weight,
        bloodGroup: action.payload.bloodGroup,
        bloodGlucose: action.payload.bloodGlucose,
        bloodPressure: action.payload.bloodPressure,
        allergies: action.payload.allergies,
        medication: action.payload.medication,
        history: action.payload.history,
       };
      case PROFILE_SAVE_SUCCESS:
        return { ...state };
      case PROFILE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
