import {
  REQUEST_MACHINES,
  RECEIVE_MACHINES,
  LOADING_MACHINES,
  REQUEST_NEW_MACHINE,
  RECEIVE_NEW_MACHINE,
} from '../../actions/adminTypes';

export const RequestMachinesForPlant = (plantID) => {
  return {
    type: REQUEST_MACHINES,
    payload: plantID
  }
}

export const RecieveMachinesForPlant = () => {
  return {
    type: RECEIVE_MACHINES,
  }
}

export const RequestNewMachine = (serial, plant) => {
  return {
    type: REQUEST_NEW_MACHINE,
    serial,
    plant
  };
};

export const ReceiveNewMachine = () => {
  return {
    type: RECEIVE_NEW_MACHINE
  }
};
