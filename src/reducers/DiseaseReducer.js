import { DISEASE_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  causes: '',
  id: '',
  name: '',
  overview: '',
  suggestion: '',
  worseBy: '',
  symptoms: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case DISEASE_FETCH_SUCCESS:
      console.log(action.payload);
      return {
         ...state,
        name: action.payload.name,
        id: action.payload.id,
        causes: action.payload.causes,
        overview: action.payload.overview,
        suggestion: action.payload.suggestion,
        worseBy: action.payload.worseBy,
        symptoms: action.payload.symptoms
       };
    default:
      return state;
  }
};
