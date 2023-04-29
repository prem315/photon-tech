import isEmpty from '../../utils/is-empty';
import * as actionTypes from '../../actions/adminTypes';

const initialState = {
  	isAuthenticated: false,
  	//merchantRole: false,
	user: {},
	errors: null,
  loading: false
};

export default function(state= initialState, action) {
  	switch (action.type) {
      case actionTypes.LOADING_LOGIN:
        return { ...state, loading: true };
    	case actionTypes.SET_CURRENT_USER:
    		console.log(action.payload)
      		return {
        		...state,
        		isAuthenticated: !isEmpty(action.payload),
        		user: action.payload,
            loading: false,
    				//merchantRole: action.merchantRole,
    				errors: null
      		}
      case actionTypes.ADMIN_LOGIN_ERROR:
        console.log(action.payload);
        return {
          ...state,
          errors: action.payload,
          loading: false
        }
		case actionTypes.ADMIN_LOGOUT:
			return initialState
    	default:
      		return state;
  }
}
