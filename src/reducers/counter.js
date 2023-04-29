import {INC_NUMBER, DEC_NUMBER} from '../actions/counter';
import * as actionTypes from '../actions/adminTypes';
const initialState = {
    counterData: 0
};

export default function(state= initialState, action) {
    switch (action.type) {
        case INC_NUMBER:
        return {
          ...state,
          counterData: action.payload + 1
        }

        case DEC_NUMBER:
        return {
          ...state,
          counterData: action.payload - 1
        }

        case actionTypes.ADMIN_LOGOUT:
			    return initialState
  
      default:
        return state;
    }
  }
  
