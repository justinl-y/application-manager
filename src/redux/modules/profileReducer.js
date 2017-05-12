import {
  SET_USER_PROFILE,
  EDIT_USER_PROFILE,
  REMOVE_USER_PROFILE,
} from './profileActions';

const initialState = {};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, ...action.payload };
    case EDIT_USER_PROFILE:
      return { ...state, ...action.payload };
    case REMOVE_USER_PROFILE:
      return state;
    default:
      return state;
  }
};

export default userProfileReducer;
