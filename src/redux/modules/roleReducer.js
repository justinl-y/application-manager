import {
  LOAD_ROLES,
  LOAD_ROLE,
  ADD_ROLE,
  EDIT_ROLE,
  SAVE_ROLE,
} from './roleActions';

const initialState = {};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROLES:
      return state;
    case LOAD_ROLE:
      return state;
    case ADD_ROLE:
      return { ...state, isNew: true, id: 0 };
    case EDIT_ROLE:
      return { ...state, isNew: false };
    case SAVE_ROLE:
      return { ...state,
        isNew: action.payload.id === 0,
        id: action.payload.id,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default roleReducer;
