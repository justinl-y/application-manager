import firebase from 'firebase';
import userDetailApi from '../api/user-detail';
import rolesApi from '../api/roles-list';

// change firebase user email
const changeFirebaseEmail = (newEmail) => {
  const user = firebase.auth().currentUser;

  return user.updateEmail(newEmail)
    .then(() => {
      console.log('Email successfully changed');
    })
    .catch((err) => {
      console.log(err);
    });
};

// change firebase user password
const changeFirebasePassword = (newPassword) => {
  const user = firebase.auth().currentUser;

  return user.updatePassword(newPassword)
    .then(() => {
      console.log('Email successfully changed');
    })
    .catch((err) => {
      console.log(err);
    });
};

// combine change account function
const changeUserAccount = (userDetails) => {
  changeFirebaseEmail(userDetails.email);

  userDetailApi.edit(userDetails);

  if (userDetails.password) {
    changeFirebasePassword(userDetails.password);
  }
};

// delete account function
const deleteUserAccount = () => {
  const user = firebase.auth().currentUser;

  // delete database records
  rolesApi.delete(user.uid);

  // delete userDetails
  userDetailApi.delete(user.uid);

  // delete firebase account
  return user.delete().then(() => {
    console.log('User account deleted');
  })
  .catch((err) => {
    console.log(err);
  });
};

export default {
  edit: changeUserAccount,
  delete: deleteUserAccount,
};
