import {
  LOAD_LOCATIONS,
  ADD_LOCATION,
} from './locationActions';

const initialState = {};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOCATIONS:
      return { ...state, ...action.payload };
    case ADD_LOCATION:
      return state; // add message handling
    default:
      return state;
  }
};

export default locationsReducer;
