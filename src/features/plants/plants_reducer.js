//import isEmpty from '../../../utils/is-empty';
import * as actionTypes from '../../actions/adminTypes';

const initialState = {
    loading: false,
    plants: []
};

export default function(state = initialState, action) {

    switch (action.type) {
        case actionTypes.REQUEST_ADMIN_PLANTS:
            return {
                ...state,
                loading: true
            }

        // case actionTypes.RECEIVE_CREATE_PLACE:
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         loading: false,
        //         myplaces: [...state.myplaces, action.payload]
        //     }

        case actionTypes.RECEIVE_ADMIN_PLANTS:
            //console.log(action.payload)
            return {
                ...state,
                loading: false,
                plantData: action.payload
            }
        break;
    default:
        return state;
    }
}
