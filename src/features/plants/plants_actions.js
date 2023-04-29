import * as actionTypes from '../../actions/adminTypes';
import {
  REQUEST_NEW_PLANT,
  RECEIVE_NEW_PLANT,
  LOADING_NEW_PLANT
} from '../../actions/adminTypes';

// requesting merchant places
export const requestAdminPlants = () => {
    console.log("here action");
    return {
        type: actionTypes.REQUEST_ADMIN_PLANTS
    }
}
// receiving merchant places
export const recieveAdminPlants = () => {
    return {
        type: actionTypes.RECEIVE_ADMIN_PLANTS
    }
}

export const createNewPlant = (values) => {
  console.log(values);
  return {
    type: REQUEST_NEW_PLANT,
    name: values.name,
    client: values.client,
    address: values.address
  }
}

export const ReceiveNewPlant = () => {
  return {
    type: RECEIVE_NEW_PLANT
  }
}
