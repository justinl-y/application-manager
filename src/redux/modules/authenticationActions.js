import auth from '../../services/firebase/auth';
import { setUserProfile } from './profileActions';

// actions
export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

// action creators
const setUserSignIn = signInData => ({
  type: USER_SIGN_IN,
  payload: signInData,
});

export const setUserSignOut = () => ({
  type: USER_SIGN_OUT,
  payload: null,
});

// thunks
export const userSignUp = signUpDetails => (dispatch) => {
  auth.signUpUser(signUpDetails)
      .then((signUpResult) => {
         // to authentication reducer
        dispatch(setUserSignIn(signUpResult.userAuthentication));
        // to profile reducer
        dispatch(setUserProfile(signUpResult.userProfile));
      })
      .catch((err) => {
        console.log(err);
      });
};

export const userSignIn = signInDetails => (dispatch) => {
  auth.signInUser(signInDetails)
      .then((signInResult) => {
        // to authentication reducer
        dispatch(setUserSignIn(signInResult.userAuthentication));
        // to profile reducer
        dispatch(setUserProfile(signInResult.userProfile));
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
