import auth from '../../services/auth';

// actions
export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

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
      })
      .catch((err) => {
        console.log(err);
      });
};

export const userSignOut = () => (dispatch) => {
  auth.signOutUser()
      .then(() => {
        dispatch(setUserSignOut());
      })
      .catch((err) => {
        console.log(err);
      });
};
