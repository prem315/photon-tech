import * as actionTypes from '../../actions/adminTypes';
// admin login request
export const adminloginRequest = (values) => {
  console.log(values);
    return {
        type: actionTypes.ADMIN_LOGIN_REQUESTING,
        values
    }
}

export const adminlogOut = () => {
    return {
        type: actionTypes.ADMIN_LOGOUT
    }
}
