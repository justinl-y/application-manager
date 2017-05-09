import { LOAD_ROLE_TYPES, ADD_ROLE_TYPE } from './roleTypeActions';

const initialState = {};

const roleTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROLE_TYPES:
      return { ...state, ...action.payload };
    case ADD_ROLE_TYPE:
      return state; // add message handling
    default:
      return state;
  }
};

export default roleTypesReducer;
