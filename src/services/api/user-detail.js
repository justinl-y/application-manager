import api from './base';

const getUserDetails = userId => (
  api.get(`/userDetails/${userId}`)
    .then(result => result)
    .catch(err => (
      `The following error has occured: ${err}`
    ))
);

const createUserDetails = (userId, data) => {
  api.set(`/userDetails/${userId}`, data);
};

const updateUserDetails = (userId, data) => {
  api.change(`/userDetails/${userId}`, data)
    .then(() => (
      'User details modified'
    ))
    .catch(err => (
      `The following error has occured: ${err}`
    ));
};

const deleteUserDetails = (userId) => {
  // add other room records to delete
  api.set(`/userDetails/${userId}/`, null)
    .then(() => (
      'Profile deleted.'
    ))
    .catch(err => (
      // `The following error has occured: ${err}`
      console.log(err)
    ));
};

export default {
  get: getUserDetails,
  add: createUserDetails,
  edit: updateUserDetails,
  delete: deleteUserDetails,
};
