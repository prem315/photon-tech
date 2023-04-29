import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import * as actionTypes from '../actions/adminTypes';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import counterReducer from './counter';
import AdminAuthReducer from '../features/adminauth/admin_login_reducer';
import PlantsReducer from '../features/plants/plants_reducer';
import machinesReducer from '../features/machines/machinesReducer';


const rootReducer = (history) => combineReducers({

    router: connectRouter(history),
    form: formReducer,
    counter: counterReducer,
    adminAuthReducer: AdminAuthReducer,
    plants: PlantsReducer,
    machinesList: machinesReducer
})

// const rootReducer = ( state, action ) => {
//     console.log(state);
//     if ( action.type === actionTypes.ADMIN_LOGOUT ) {
//       state = undefined;
//     }

//     return appReducer(state, action)
// }



export default rootReducer
