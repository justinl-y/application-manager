import auth from '../../services/auth';

// actions
const USER_SIGN_IN = 'USER_SIGN_IN';
const USER_SIGN_OUT = 'USER_SIGN_OUT';

// action creators
const setUserSignIn = signInData => ({
  type: USER_SIGN_IN,
  payload: signInData,
});

const setUserSignOut = () => ({
  type: USER_SIGN_OUT,
  payload: null,
});

// thunks
export const userSignUp = signUpDetails => (dispatch) => {
  auth.signUpUser(signUpDetails)
      .then((signUpResult) => {
        dispatch(setUserSignIn(signUpResult));
      });
};

export const userSignIn = signInDetails => (dispatch) => {
  auth.signInUser(signInDetails)
      .then((signInResult) => {
        dispatch(setUserSignIn(signInResult));
      });
};

export const userSignOut = () => (dispatch) => {
  auth.signOutUser()
      .then(() => {
        dispatch(setUserSignOut());
      });
};
