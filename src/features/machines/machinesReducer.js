import {
  RECEIVE_MACHINES,
  LOADING_MACHINES,
  LOADING_NEW_MACHINE,
  RECEIVE_NEW_MACHINE
} from '../../actions/adminTypes';

const INITIAL_STATE = {
  machines: [],
  loading: false,
  loading_new_machine: false
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING_MACHINES:
      return { ...state, loading: true };
    case RECEIVE_MACHINES:
    console.log(state);
      return { ...state, loading: false, machines: action.payload };
    case LOADING_NEW_MACHINE:
      return { ...state, loading_new_machine: true };
    case RECEIVE_NEW_MACHINE:
      console.log(state);
      return {
        ...state, 
        loading_new_machine: false,
        machines: [...state.machines, action.payload]
      };
    default:
      return state;
  }
}
