import {
  HISTORY_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  historyList: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case HISTORY_FETCH_SUCCESS:
      return { ...state, historyList: action.payload };
    default:
      return state;
  }
};
