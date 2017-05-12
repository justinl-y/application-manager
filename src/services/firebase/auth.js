import firebase from 'firebase';
import userDetailApi from '../api/user-detail';

const signUpUser = signUpDetails => firebase.auth()
    .createUserWithEmailAndPassword(signUpDetails.email, signUpDetails.password)
    .then(() => {
      const uId = firebase.auth().currentUser.uid;
      const userProfile = {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        emailAddress: signUpDetails.email,
      };

      // userDetails insert to firebase
      userDetailApi.add(uId, userProfile);

      const signUpResult = {
        userAuthentication: {
          uId,
          signedIn: { signUp: true, signIn: true },
          message: (`Sign-up successful, welcome to Application Manager ${signUpDetails.firstName}`),
        },
        userProfile,
      };

      return signUpResult;
    })
    .catch((error) => {
      const signUpResult = {
        userAuthentication: {
          uId: null,
          signedIn: { signUp: false, signIn: false },
          message: (`Sorry, sign-up was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
        },
        userProfile: {},
      };

      return signUpResult;
    });

const signInUser = signInDetails => firebase.auth()
    .signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
    .then(() => {
      const uId = firebase.auth().currentUser.uid;

      // get userDetails from firebase and return signInResult to thunk
      return userDetailApi.get(uId)
        .then((result) => {
          const signInResult = {
            userAuthentication: {
              uId,
              signedIn: { signUp: false, signIn: true },
              message: (`Sign-in successful, welcome back to Application Manager ${result.firstName}`),
            },
            userProfile: {
              firstName: result.firstName,
              lastName: result.lastName,
              emailAddress: signInDetails.email,
            },
          };

          return signInResult;
        });
    })
    .catch((error) => {
      const signInResult = {
        userAuthentication: {
          uId: null,
          signedIn: { signUp: false, signIn: false },
          message: (`Sorry, sign-in was unsuccessful. The following error has occured: ${error.code}, ${error.message}`),
        },
        userProfile: {},
      };

      return signInResult;
    });

const signOutUser = () => firebase.auth()
    .signOut()
    .then(() => {
      console.log('Sign-out successful.');
    }).catch((error) => {
      console.log(error);
    });

export default {
  signUpUser,
  signInUser,
  signOutUser,
};
