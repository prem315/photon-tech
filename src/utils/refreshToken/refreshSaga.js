import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  REQUEST_NEW_TOKEN,
  RECEIVE_NEW_TOKEN
} from './actionTypes';

// watcher saga
function* watchRefreshTokenRequest() {
    yield takeEvery(REQUEST_NEW_TOKEN, receiveNewToken);
}

function refreshTokenAPI(refresh_token) {
  console.log(refresh_token);
  axios({
    method: 'POST',
    url: 'https://us-central1-photom-iot-1.cloudfunctions.net/superuser',
    data: {
      action: 'token',
      refresh_token
    }
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}
// worker saga
function* receiveNewToken() {

    try{
        let refresh_token = localStorage.getItem('refreshToken');
        const response = yield refreshTokenAPI(refresh_token);
        yield put({
            type: RECEIVE_NEW_TOKEN,
            payload: response
        })
    }catch{
        console.log("error");
    }
}


export default watchRefreshTokenRequest;
