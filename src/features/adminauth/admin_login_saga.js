import axios from 'axios';
import { put, takeEvery, call } from "redux-saga/effects";
//import jwt_decode from 'jwt-decode';
import * as actionTypes from '../../actions/adminTypes';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
//import { getJwt } from '../../utils/getJwt';
//import { getApiUrl } from '../../utils/serverurl';


// login watcher saga
function* watchAdminLoginRequest() {
	yield takeEvery(actionTypes.ADMIN_LOGIN_REQUESTING, login)
}

// login api
function loginApi(email, password) {
  	const authData = {
        action: "login",
    	email: email,
    	password: password
	}
	 console.log(authData);

  	return axios.post("https://us-central1-photom-iot-1.cloudfunctions.net/superuser", authData, {
		headers: {
			'Content-Type': 'application/json',
		}}).then((res) => {
			console.log(res)
				if (res.data.code && res.data.code === "auth/wrong-password") {
					return res.data.code;
				} else {

					const token = res.data.token;
					// set jwt token to localStorage
					console.log(token);
					const refreshToken = res.data.user.user.stsTokenManager.refreshToken;
					console.log(refreshToken);
					localStorage.setItem('jwtPhotomToken', token);
					localStorage.setItem('refreshToken', refreshToken);
					// set token to Auth Header
					setAuthorizationToken(token);
					// decode token to get user data
					//const decoded_data = jwt_decode(token);
					//return decoded_data;
					return res.data.user.user
				}

		}).catch((err) => {
			console.log(err);
			// if (err.response) {
			// 	console.log(err.response);
			// }
			throw err;
		})
}


// login worker saga
function* login(values) {
	console.log(values);
	yield put({
		type: actionTypes.LOADING_LOGIN
	});
	const { email, password } = values.values;
	try {
		const response = yield call(loginApi, email, password)
		console.log(response);
		if (response === "auth/wrong-password") {
			yield put({
				type: actionTypes.ADMIN_LOGIN_ERROR,
				payload: "Wrong Username and Password."
			})
		} else {
			yield put({
				type: actionTypes.SET_CURRENT_USER,
				payload: response
				//merchantRole: merchantUrlRes
			})
		}


	}catch(err) {
		if(err.response.status === 400){
			yield put({
				type: actionTypes.ADMIN_LOGIN_ERROR,
				payload: "Wrong Username and Password."
			})
		}
	}
}

export default watchAdminLoginRequest;
