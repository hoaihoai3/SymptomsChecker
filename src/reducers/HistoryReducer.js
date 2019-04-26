import {
  HISTORY_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  historyList: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  // const historyTempList = [...state.historyList];
  switch (action.type) {
    case HISTORY_FETCH_SUCCESS:
      // historyTempList.push(action.payload);
      // return { ...state, historyList: historyTempList };
      return { ...state, historyList: action.payload };

      // return action.payload;
    default:
      return state;
  }
};
