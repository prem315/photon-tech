import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import fire from '../../components/config';
// import { getJwt } from '../../../utils/getJwt';
import * as actionTypes from '../../actions/adminTypes';
import { getJwt } from '../../utils/getJwt';
import {
  REQUEST_NEW_PLANT,
  RECEIVE_NEW_PLANT,
  LOADING_NEW_PLANT } from '../../actions/adminTypes';
import {
  REQUEST_NEW_TOKEN
} from '../../utils/refreshToken/actionTypes';

// watcher saga
function* watchAdminPlantsRequest() {
    yield takeEvery(actionTypes.REQUEST_ADMIN_PLANTS, receiveAdminPlants);
}

// api
async function adminPlantsAPI() {
    let token = await getJwt();
    let plantsData = [];
    await axios({
      method: 'GET',
      url: `https://us-central1-photom-iot-1.cloudfunctions.net/plant?token=${token}`
    }).then((res) => {
      console.log(res);
      res.data.map((device) => {
        plantsData.push({
          client: device.client,
          name: device.name,
          devices: device.devicesCount,
          status: device.active,
          width: device.panelWidth,
          id: device.id
        });
      })
      return plantsData;
    }).catch((err) => {
      console.log(err);
    });

    return plantsData;
}

// worker saga
function* receiveAdminPlants() {

    try{
        const response = yield adminPlantsAPI();
        yield put({
          type: REQUEST_NEW_TOKEN
        })
        yield put({
            type: actionTypes.RECEIVE_ADMIN_PLANTS,
            payload: response
        })
    }catch{
        console.log("error");
    }
}

// watcher saga for new plant
function* watchNewPlantRequest() {
    yield takeEvery(actionTypes.REQUEST_NEW_PLANT, requestNewPlant);
}

// api
async function requestPlantApi(name, client, address) {
  console.log(name, client, address);
    let token = await getJwt();
    console.log(token);
    await axios({
      method: 'POST',
      url: 'https://us-central1-photom-iot-1.cloudfunctions.net/plant',
      header: {
        'Content-Type': 'application/json'
      },
      body: {
        token,
        action: 'add',
        name: 'Testing12',
        panelWidth: 100,
        client: 'Icreate'
      }
    }).then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err);
      console.log(err.response);
    });

}

// worker saga
function* requestNewPlant(values) {
    console.log(values);
    try{
        const response = yield requestPlantApi(values.name, values.client, values.address);
        yield put({
            type: actionTypes.LOADING_NEW_PLANT,
        })
    }catch{
        console.log("error");
    }
}

export { watchAdminPlantsRequest, watchNewPlantRequest };
