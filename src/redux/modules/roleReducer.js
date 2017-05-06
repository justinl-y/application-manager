import {
  LOAD_ROLE,
  UNLOAD_ROLE,
  ADD_ROLE,
  EDIT_ROLE,
  SAVE_ROLE,
  REMOVE_ROLE,
} from './roleActions';

const initialState = {};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROLE:
      return { ...state, ...action.payload };
    case UNLOAD_ROLE:
      return { isNew: true, id: '0' };
    case ADD_ROLE:
      return { ...state, isNew: true, id: '0' };
    case EDIT_ROLE:
      return { ...state, isNew: false, id: action.payload };
    case SAVE_ROLE:
      return { ...state,
        isNew: action.payload.id === 0,
        id: action.payload.id,
        message: action.payload.message,
      };
    case REMOVE_ROLE:
      return state;
    default:
      return state;
  }
};

export default roleReducer;
