import { USER_SIGN_IN, USER_SIGN_OUT } from './authenticationActions';

const initialState = {
  signedIn: {},
  uId: null,
  userName: {},
  message: null,
};

const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        signedIn: { ...action.payload.signedIn },
        uId: action.payload.uId,
        userName: { ...action.payload.userName },
        message: action.payload.message,
      };
    case USER_SIGN_OUT:
      return {
        ...state,
        signedIn: {},
        uId: null,
        userName: {},
        message: 'Goodbye. See you soon.',
      };
    default:
      return state;
  }
};

export default userSignInReducer;
