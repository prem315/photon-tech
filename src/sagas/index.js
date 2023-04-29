//import axios from "axios";
import { all, put, takeEvery, call } from "redux-saga/effects";
import helloSaga from './hello';
import watchAdminLoginRequest from '../features/adminauth/admin_login_saga';
import { watchAdminPlantsRequest, watchNewPlantRequest } from '../features/plants/plants_saga';
import { watchMachines, watchNewMachine } from '../features/machines/machinesSaga';
import watchRefreshTokenRequest from '../utils/refreshToken/refreshSaga';

// add all sagas required to be run on start 👇
export default function* rootSaga() {
    yield all([
    helloSaga(),
		watchAdminLoginRequest(),
		watchAdminPlantsRequest(),
    watchMachines(),
    watchNewPlantRequest(),
    watchNewMachine(),
    watchRefreshTokenRequest()
  	]);
}
