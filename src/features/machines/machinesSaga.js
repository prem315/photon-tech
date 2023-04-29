  import axios from 'axios';
import { put, takeEvery, call } from "redux-saga/effects";
import { getJwt } from '../../utils/getJwt';
import {
  REQUEST_MACHINES,
  RECEIVE_MACHINES,
  LOADING_MACHINES,
  REQUEST_NEW_MACHINE,
  RECEIVE_NEW_MACHINE,
  LOADING_NEW_MACHINE
} from '../../../src/actions/adminTypes';
import { history } from '../../store/configureStore';

// watcher saga
function* watchMachines() {
    yield takeEvery(REQUEST_MACHINES, receiveMachines)
}

//api
async function getMachinesAPI(plantID) {
  let token = await getJwt();
  console.log(token);
  return await axios({
    method: 'GET',
    url: `https://us-central1-photom-iot-1.cloudfunctions.net/device?token=${token}&plant=${plantID}`,
  }).then((res) => {
    console.log(res);
    return res.data;
  }).catch((e) => {
    console.log(e);
  })
}
//worker saga
function* receiveMachines(values) {
  console.log(values);
  try {
    const res = yield getMachinesAPI(values.payload);

    yield put({
      type: RECEIVE_MACHINES,
      payload: res
    })

  } catch (e) {
    console.log(e);
  }
}


// watcher saga for new machines
function* watchNewMachine() {
    yield takeEvery(REQUEST_NEW_MACHINE, requestnewMachine)
}

//api
async function newMachineApi(serial, plant) {
  let token = await getJwt();
  console.log(token);
  return await axios({
    method: 'POST',
    url: 'https://us-central1-photom-iot-1.cloudfunctions.net/device',
    data: {
      token,
      serial,
      plant
    }
  }).then((res) => {
    console.log(res);
      return res.data;
  }).catch((e) => {
    console.log(e);
  })
}
//worker saga
function* requestnewMachine(values) {
  console.log(values);
  try {
    yield put({
      type: LOADING_NEW_MACHINE
    })
    const res = yield newMachineApi(values.serial, values.plant);

    yield put({
      type: RECEIVE_NEW_MACHINE,
      payload: res
    })
    yield history.goBack();

  } catch (e) {
    console.log(e);
  }
}
export { watchMachines, watchNewMachine };
