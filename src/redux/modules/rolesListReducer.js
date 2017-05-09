import {
  LOAD_ROLES,
} from './rolesListActions';

const initialState = {};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROLES:
      return { ...action.payload };
    default:
      return state;
  }
};

export default roleReducer;
